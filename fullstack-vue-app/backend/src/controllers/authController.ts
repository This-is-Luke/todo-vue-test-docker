// Importing necessary modules and types
import { Request, Response } from 'express'; // Express request and response types
import bcrypt from 'bcrypt'; // For password hashing
import jwt from 'jsonwebtoken'; // For JWT token management
import { db } from '../config/dbConfig'; // Database configuration
import { getRepository } from 'typeorm'; // TypeORM repository for DB operations
import { ShoppingItem } from '../entities/ShoppingItem'; // ShoppingItem entity
import { RowDataPacket } from 'mysql2'; // MySQL row data packet type
import { Equal } from 'typeorm'; // TypeORM Equal function for query building

// Register User Function
export const register = async (req: Request, res: Response) => {
  // Destructuring request body to get user details
  const { username, password, email } = req.body;
  
  // Hashing the password for security reasons
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    // Inserting the new user into the database
    await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    
    // Sending a success response
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    // Handling errors and sending a server error response
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login User Function
export const login = async (req: Request, res: Response) => {
  // Destructuring request body to get login details
  const { username, password } = req.body;
  
  try {
    // Fetching the user from the database based on the username
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]) as unknown as [RowDataPacket[]];
    const user = rows[0];
    
    // Checking if the user exists
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    // Verifying the password
    const isMatch = await bcrypt.compare(password, user.password);
    
    // If password doesn't match, return an error
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    // Generating a JWT token for the user
    const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '1h' });
    
    // Sending the token in the response
    res.status(200).json({ token });
  } catch (error) {
    // Handling errors and sending a server error response
    res.status(500).json({ message: 'Server error', error });
  }
};

// Logout User Function
export const logout = async (req: Request, res: Response) => {
  // Extracting the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    // If no token is provided, send an error response
    return res.status(400).json({ message: 'No token provided.' });
  }
  
  try {
    // Decoding the token to get its expiry time
    const decoded: any = jwt.verify(token, 'yourSecretKey');
    const expiry = new Date(decoded.exp * 1000);
    
    // Inserting the token into the blacklist table
    await db.query('INSERT INTO jwt_blacklist (token, expiry) VALUES (?, ?)', [token, expiry]);
    
    // Sending a success response
    res.status(200).json({ message: 'Logged out successfully.' });
  } catch (error) {
    // Handling errors and sending a server error response
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Shopping List for a User Function
export const getShoppingList = async (req: Request, res: Response) => {
  // Extracting and parsing the user ID from the request
  const userId = parseInt(req.user.id, 10);
  
  try {
    // Fetching the shopping list for the user using TypeORM query builder
    const shoppingList = await getRepository(ShoppingItem)
      .createQueryBuilder("shoppingItem")
      .innerJoin("shoppingItem.user", "user")
      .where("user.id = :userId", { userId })
      .getMany();
    
    // Sending the shopping list in the response
    res.json(shoppingList);
  } catch (error) {
    // Handling errors and sending a server error response
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Shopping Item by ID Function
export const getShoppingItemById = async (req: Request, res: Response) => {
  // Extracting and parsing the user and item IDs from the request
  const userId = parseInt(req.user.id, 10);
  const itemId = parseInt(req.params.id, 10);
  
  try {
    // Fetching the specific shopping item by its ID
    const shoppingItem = await getRepository(ShoppingItem).findOne({
      where: {
        user: Equal(userId),
        id: Equal(itemId)
      }
    });
    
    // Sending the shopping item in the response
    res.json(shoppingItem);
  } catch (error) {
    // Handling errors and sending a server error response
    res.status(500).json({ message: 'Server error', error });
  }
};
