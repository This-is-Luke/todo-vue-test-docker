import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import apiRoutes from './routes/apiRoutes';
import authRoutes from './routes/authRoutes';
import { protect } from './middleware/authMiddleware';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);  // Logging

// Routes
app.use('/api', apiRoutes);

// Auth Routes
app.use('/api/auth', authRoutes);

// Protected Routes
app.use('/api/items', protect, apiRoutes);

// Error Handling
app.use(errorHandler);

export default app;
