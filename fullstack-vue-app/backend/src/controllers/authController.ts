import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../config/dbConfig';
import { config } from 'dotenv';
import { RowDataPacket } from 'mysql2';

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
