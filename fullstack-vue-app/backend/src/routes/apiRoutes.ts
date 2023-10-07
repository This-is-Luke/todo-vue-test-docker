import express from 'express';
import { protect } from '../middleware/authMiddleware';
import { getAllUsers, deleteUser, getUserById } from '../controllers/userController';

// Import controllers
import {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} from '../controllers/shoppingListController';

// Create router
const router = express.Router();

// User routes

// Get user by ID
router.get('/users/:id', protect, getUserById);  // Protected

// Get all users
router.get('/users', protect, getAllUsers);  // Protected

// Delete user
router.delete('/users/:id', protect, deleteUser);  // Protected

// Protected route
router.get('/api/protected-route', protect, (req, res) => {
  res.send('You got access to the protected route');
});

// Shopping list routes
router.get('/items', protect, getAllItems);  // Protected
router.get('/items/:id', protect, getItemById);  // Protected
router.post('/items', protect, addItem);  // Protected
router.put('/items/:id', protect, updateItem);  // Protected
router.delete('/items/:id', protect, deleteItem);  // Protected

export default router;
