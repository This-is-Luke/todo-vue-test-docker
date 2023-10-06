// Importing required modules
import express from 'express';
import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { body, validationResult } from 'express-validator';
import ShoppingList from '../models/ShoppingList';

// Initialize the router
const router = express.Router();

// Middleware for request validation
const validateRequest = [
  body('itemName').isString().withMessage('Item name must be a string'),
  body('quantity').isNumeric().withMessage('Quantity must be a number'),
];

// POST route to create a new shopping list item
router.post('/', validateRequest, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { item_id, quantity, item_name } = req.body;

  const item = new ShoppingList();
  item.item_id = item_id || 0;
  item.item_name = item_name || '';
  item.quantity = quantity || 0;
  item.status = '';

  const entityManager = getManager();
  await entityManager.save(ShoppingList, item);

  res.status(201).json(item);
});

// GET route to fetch all shopping list items
router.get('/', async (req, res) => {
  const entityManager = getManager();
  const items = await entityManager.find(ShoppingList);
  if (!items) {
    return res.status(404).json({ message: 'No items found' });
  }
  res.status(200).json(items);
});

// GET route to fetch a single shopping list item by ID
router.get('/:id', async (req, res) => {
  const entityManager = getManager();
  const item = await entityManager.findOne(ShoppingList, { where: { item_id: Number(req.params.id) } });
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json(item);
});

// PUT route to update a shopping list item by ID
router.put('/:id', validateRequest, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const entityManager = getManager();
  const item = await entityManager.findOne(ShoppingList, { where: { item_id: Number(req.params.id) } });
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const { item_id, quantity } = req.body;
  item.item_id = item_id;
  item.quantity = quantity;

  await entityManager.save(ShoppingList, item);
  res.status(200).json(item);
});

// DELETE route to remove a shopping list item by ID
router.delete('/:id', async (req, res) => {
  const entityManager = getManager();
  const item = await entityManager.findOne(ShoppingList, { where: { item_id: Number(req.params.id) } });
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  await entityManager.remove(ShoppingList, item);
  res.status(200).json({ message: 'Item deleted' });
});

// Export the router
export default router;
