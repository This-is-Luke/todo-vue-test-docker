// Importing the necessary types from the Express library
import { Request, Response, NextFunction } from 'express';

// Defining the 'errorHandler' middleware function
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Logging the error stack trace to the console
  // This is like the firefighter's report, detailing what went wrong and where
  console.error(err.stack);

  // Sending a 500 Internal Server Error response along with the error message
  // This is the firefighter telling you, "Something's on fire, but don't worry, we're on it."
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
};
