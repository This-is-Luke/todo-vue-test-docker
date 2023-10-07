// Importing necessary types from Express and JWT libraries
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Defining the 'protect' middleware function
export const protect = (req: Request, res: Response, next: NextFunction) => {
  // An array of routes that are open to the public, no token needed
  const publicRoutes = [
    { path: '/register', method: 'POST' },
    { path: '/login', method: 'POST' },
    // Add more public routes here as your app grows
  ];

  // Checking if the incoming request is for a public route
  const isPublicRoute = publicRoutes.some(
    (route) => req.path === route.path && req.method === route.method
  );

  // If it's a public route, no need for a token, let it pass!
  if (isPublicRoute) {
    return next();
  }

  // Extracting the token from the Authorization header
  const token = req.header('Authorization');

  // If there's no token, halt! You shall not pass!
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verifying the token using your super-secret key
    console.log("Token from request: Received");
    const decoded = jwt.verify(token, 'yourSecretKey');
    
    // Storing the decoded payload in the request object for use in other routes
    req.user = decoded;

    // All good, carry on!
    next();
  } catch (error) {
    // If the token is invalid or expired, throw them into the moat!
    console.error("error: ", error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
