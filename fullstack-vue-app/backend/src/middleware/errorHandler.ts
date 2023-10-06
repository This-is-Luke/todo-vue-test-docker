// errorHandler.ts

import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);  // Log the stack trace
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
};
