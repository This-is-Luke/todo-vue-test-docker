import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { checkBlacklist } from './middleware/checkBlacklist';  // Import the checkBlacklist middleware
import { protect } from './middleware/authMiddleware';  // Import the protect middleware
import apiRoutes from './routes/apiRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Use the middleware for routes starting with '/api'
app.use('/api', checkBlacklist, protect);

// Routes
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// Error Handling
app.use(errorHandler);

export default app;
