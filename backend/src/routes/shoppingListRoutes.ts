import express from 'express';
import { getManager } from 'typeorm';
import ShoppingList from '../models/ShoppingList';
import fs from 'fs';

const router = express.Router();

router.post('/shopping-list', async (req, res) => {
  console.log("POST /shopping-list called");
  const shoppingListRepository = getManager().getRepository(ShoppingList);
  const { itemName, quantity } = req.body;
  const userId = 1; 
  const id = 0; 
  const isPurchased = false; 
  const item = new ShoppingList(id, userId, itemName, quantity, isPurchased);
  
  await shoppingListRepository.save(item);
  console.log("Item saved:", item);
  return res.status(201).json(item);
});

// Get all Shopping List items
router.get('/shopping-list', async (req, res) => {
  console.log("GET /shopping-list called");
  const shoppingListRepository = getManager().getRepository(ShoppingList);
  const items = await shoppingListRepository.find();
  console.log("Items fetched:", items);
  return res.json(items);
});

// Update a Shopping List item
router.put('/shopping-list/:id', async (req, res) => {
  console.log(`PUT /shopping-list/${req.params.id} called`);
  const shoppingListRepository = getManager().getRepository(ShoppingList);
  const id = Number(req.params.id); 
  const { itemName, quantity } = req.body;
  await shoppingListRepository.update(id, { itemName, quantity });
  const updatedItem = await shoppingListRepository.findOne({ where: { id: id } });
  console.log("Item updated:", updatedItem);
  return res.json(updatedItem);
});

// Delete a Shopping List item
router.delete('/shopping-list/:id', async (req, res) => {
  console.log(`DELETE /shopping-list/${req.params.id} called`);
  const shoppingListRepository = getManager().getRepository(ShoppingList);
  const id = Number(req.params.id); // Convert string to number
  await shoppingListRepository.delete(id);
  console.log("Item deleted:", id);
  return res.status(204).send();
});

export default router;
