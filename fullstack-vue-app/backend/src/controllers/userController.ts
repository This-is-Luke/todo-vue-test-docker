// Importing the required types for Express and MySQL
import { Request, Response } from 'express'; // Types for Express request and response objects
import pool from '../config/dbConfig';  // Importing the MySQL connection pool from the config

// Function to Get a Specific User by their ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  console.log("Inside getUserById"); // Logging to indicate we're inside the function
  // Extracting the user ID from the request parameters
  const userId = req.params.id;

  try {
    // Querying the database to fetch the user with the specified ID
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]) as unknown as [any];
    // If the user exists, send their data as a JSON response
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      // If the user doesn't exist, send a 404 Not Found response
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server Error' });
  }
};

// Function to Get All Users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  console.log("Inside getAllUsers"); // Logging to indicate we're inside the function

  try {
    // Querying the database to fetch all users
    const [rows] = await pool.query('SELECT * FROM users');
    // Sending the fetched rows as a JSON response
    res.status(200).json(rows);
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server Error' });
  }
};

// Function to Delete a User
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // Deleting the user with the specified ID from the database
    await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
    // Sending a 200 OK response indicating successful deletion
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server Error' });
  }
};
