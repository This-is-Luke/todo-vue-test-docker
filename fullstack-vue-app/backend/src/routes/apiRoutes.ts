import express from 'express';
import {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
} from '../controllers/shoppingListController';

const router = express.Router();

// Define API routes
router.get('/items', getAllItems);
router.get('/items/:id', getItemById);
router.post('/items', addItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;