import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { checkBlacklist } from './middleware/checkBlacklist';  // Import the checkBlacklist middleware
import { protect } from './middleware/authMiddleware';  // Import the protect middleware
import apiRoutes from './routes/apiRoutes';
import authRoutes from './routes/authRoutes';
import * as userController from './controllers/userController';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Use the middleware for routes starting with '/api'
app.use('/api', checkBlacklist);

app.get('/api/users', userController.getAllUsers);
app.get('/api/users/:id', userController.getUserById);
app.delete('/api/users/:id', userController.deleteUser);

// Routes
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// Error Handling
app.use(errorHandler);

export default app;
