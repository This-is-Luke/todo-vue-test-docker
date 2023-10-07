// Importing all the necessary modules and components
import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import apiRoutes from './routes/apiRoutes';
import authRoutes from './routes/authRoutes';
import * as userController from './controllers/userController';

// Initialize the express application
const app = express();

// Middleware Section: The "Musicians" of our Orchestra
// -----------------------------------------------------

// Parse incoming JSON payloads
app.use(express.json());

// Logging middleware for development
app.use(logger);

// User Routes: The "Soloists" in our Orchestra
// --------------------------------------------

// Get all users
app.get('/api/users', userController.getAllUsers);

// Get a user by ID
app.get('/api/users/:id', userController.getUserById);

// Delete a user by ID
app.delete('/api/users/:id', userController.deleteUser);

// Routes Section: The "Sections" of our Orchestra
// ------------------------------------------------

// API routes (User, ShoppingList, etc.)
app.use('/api', apiRoutes);

// Authentication routes (Login, Register)
app.use('/api/auth', authRoutes);

// Error Handling: The "Safety Net" of our Orchestra
// --------------------------------------------------

// Global error handler
app.use(errorHandler);

// Export the app for use in other files
export default app;
