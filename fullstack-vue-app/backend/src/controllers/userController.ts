import { Request, Response } from 'express';
import pool from '../config/dbConfig';  // Import your MySQL connection pool

// Get User by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    console.log("Inside getUserById");
    const userId = req.params.id;
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]) as unknown as [any];
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

// Get All Users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    console.log("Inside getAllUsers");
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
    
  // Delete User
  export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
