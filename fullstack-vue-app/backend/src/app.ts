import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import apiRoutes from './routes/apiRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(logger);  // Logging

// Routes
app.use('/api', apiRoutes);

// Error Handling
app.use(errorHandler);

export default app;
