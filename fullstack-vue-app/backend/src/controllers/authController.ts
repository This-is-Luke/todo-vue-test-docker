import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/dbConfig';
import { getRepository } from 'typeorm'; // Import this for the shopping list
import { ShoppingItem } from '../entities/ShoppingItem'; // Import your ShoppingItem entity
import { RowDataPacket } from 'mysql2';
import { Equal } from 'typeorm';

// Register User
export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login User
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]) as unknown as [RowDataPacket[]];
    const user = rows[0];

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id }, 'yourSecretKey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Logout User
export const logout = async (req: Request, res: Response) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Assuming the token is in the Authorization header

  if (!token) {
    return res.status(400).json({ message: 'No token provided.' });
  }

  try {
    // Decode the token to get its expiry time
    const decoded: any = jwt.verify(token, 'yourSecretKey');
    const expiry = new Date(decoded.exp * 1000);

    // Insert the token into the blacklist table
    await db.query('INSERT INTO jwt_blacklist (token, expiry) VALUES (?, ?)', [token, expiry]);

    res.status(200).json({ message: 'Logged out successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Shopping List for a User
export const getShoppingList = async (req: Request, res: Response) => {
  console.log("User ID from req.user.id:", req.user.id); // Debugging line
  const userId = parseInt(req.user.id, 10); // Convert string to number
  console.log("Parsed User ID:", userId); // Debugging line
  
  try {
    const shoppingList = await getRepository(ShoppingItem)
      .createQueryBuilder("shoppingItem") // Alias for ShoppingItem table
      .innerJoin("shoppingItem.user", "user") // Alias for user table
      .where("user.id = :userId", { userId }) // Parameter substitution
      .getMany(); // Execute query

    console.log("Fetched Shopping List:", shoppingList); // Debugging line
    res.json(shoppingList);
  } catch (error) {
    console.error("Error fetching shopping list:", error); // Debugging line
    res.status(500).json({ message: 'Server error', error });
  }
};


// Get Shopping Item by ID
export const getShoppingItemById = async (req: Request, res: Response) => {
  const userId = parseInt(req.user.id, 10);
  const itemId = parseInt(req.params.id, 10);
  try {
    const shoppingItem = await getRepository(ShoppingItem).findOne({
      where: {
        user: Equal(userId),
        id: Equal(itemId)
      }
    });
    res.json(shoppingItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};