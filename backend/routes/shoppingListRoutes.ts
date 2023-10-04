import express from 'express';
import { getManager } from 'typeorm';
import { ShoppingList } from '../models/ShoppingList';

const router = express.Router();
const shoppingListRepository = getRepository(ShoppingList);

// Create a new Shopping List item
router.post('/shopping-list', async (req, res) => {
  const { item_name, quantity } = req.body;
  const item = new ShoppingList();
  item.item_name = item_name;
  item.quantity = quantity;
  await shoppingListRepository.save(item);
  return res.status(201).json(item);
});

// Get all Shopping List items
router.get('/shopping-list', async (req, res) => {
  const items = await shoppingListRepository.find();
  return res.json(items);
});

// Update a Shopping List item
router.put('/shopping-list/:id', async (req, res) => {
  const { id } = req.params;
  const { item_name, quantity } = req.body;
  await shoppingListRepository.update(id, { item_name, quantity });
  const updatedItem = await shoppingListRepository.findOne(id);
  return res.json(updatedItem);
});

// Delete a Shopping List item
router.delete('/shopping-list/:id', async (req, res) => {
  const { id } = req.params;
  await shoppingListRepository.delete(id);
  return res.status(204).send();
});

export default router;
