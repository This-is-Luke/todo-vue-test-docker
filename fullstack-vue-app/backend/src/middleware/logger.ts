// Importing the morgan library, a middleware for logging HTTP requests
import morgan from 'morgan';

// Configuring and exporting the logger middleware
// The 'dev' format string provides a concise, colored output that's easy on the eyes
export const logger = morgan('dev');
