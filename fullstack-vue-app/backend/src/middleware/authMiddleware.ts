import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  // List of routes that don't require authentication
  const publicRoutes = [
    { path: '/register', method: 'POST' },
    { path: '/login', method: 'POST' },
    // Add more routes here if needed
  ];

  // Check if the incoming request matches any of the public routes
  const isPublicRoute = publicRoutes.some(
    (route) => req.path === route.path && req.method === route.method
  );

  // If it's a public route, skip the token check
  if (isPublicRoute) {
    return next();
  }

  // Existing token check logic
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    console.log("Token from request:", token);
    const decoded = jwt.verify(token, 'yourSecretKey');
    req.user = decoded;
    next();
  } catch (error) {
    console.error("error: ", error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
