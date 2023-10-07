// Importing necessary modules and controllers
import express from 'express';
import { protect } from '../middleware/authMiddleware';
import { getAllUsers, deleteUser, getUserById } from '../controllers/userController';
import {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} from '../controllers/shoppingListController';

// Initialize the router
const router = express.Router();

// User routes

// Get a user by their ID. Note the 'protect' middleware, making sure only authorized folks get in.
router.get('/users/:id', protect, getUserById);  // Protected

// Get all users. Again, 'protect' stands guard.
router.get('/users', protect, getAllUsers);  // Protected

// Delete a user. 'Protect' ensures you can't just randomly delete people. That would be chaos.
router.delete('/users/:id', protect, deleteUser);  // Protected

// A sample protected route to demonstrate the 'protect' middleware in action.
router.get('/api/protected-route', protect, (req, res) => {
  res.send('You got access to the protected route');
});

// Shopping list routes

// Get all items in the shopping list. 'Protect' is the bouncer at the club, checking IDs.
router.get('/items', protect, getAllItems);  // Protected

// Get a specific item by its ID. 'Protect' is still on duty.
router.get('/items/:id', protect, getItemById);  // Protected

// Add a new item to the shopping list. 'Protect' ensures only authorized users can add items.
router.post('/items', protect, addItem);  // Protected

// Update an existing item. 'Protect' makes sure you're the owner or have the right permissions.
router.put('/items/:id', protect, updateItem);  // Protected

// Delete an item. 'Protect' ensures you can't just go deleting items willy-nilly.
router.delete('/items/:id', protect, deleteItem);  // Protected

// Export the router to be used in other parts of the app
export default router;
