// Importing the express module for routing and the authController for authentication logic
import express from 'express';
import { register, login } from '../controllers/authController';

// Initialize the express router
const router = express.Router();

// Registration route: The "Welcome Desk" for new users
router.post('/register', register);

// Login route: The "Key Card Desk" for returning users
router.post('/login', login);

// Export the router so it can be used in the main application
export default router;
