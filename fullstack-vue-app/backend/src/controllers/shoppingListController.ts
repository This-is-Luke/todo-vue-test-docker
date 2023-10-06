// Importing required types
import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { db } from '../config/dbConfig';

// Get all items
export const getAllItems = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM shopping_list');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get item by ID
export const getItemById = async (req: Request, res: Response) => {
    // Extracting the ID from the request parameters
    const id = req.params.id;
  
    try {
      // Querying the database and using type assertion for rows
      const [rows] = await db.query('SELECT * FROM shopping_list WHERE item_id = ?', [id]) as unknown as [RowDataPacket[]];
  
      // Sending the first row as the response
      res.status(200).json(rows[0]);
    } catch (error) {
      // Handling any errors
      res.status(500).json({ message: 'Server error', error });
    }
  };

// Add new item
export const addItem = async (req: Request, res: Response) => {
  const { item_name, quantity, type, status } = req.body;
  try {
    await db.query('INSERT INTO shopping_list (item_name, quantity, type, status) VALUES (?, ?, ?, ?)', [item_name, quantity, type, status]);
    res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update item
export const updateItem = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { item_name, quantity, type, status } = req.body;
  try {
    await db.query('UPDATE shopping_list SET item_name = ?, quantity = ?, type = ?, status = ? WHERE item_id = ?', [item_name, quantity, type, status, id]);
    res.status(200).json({ message: 'Item updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete item
export const deleteItem = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM shopping_list WHERE item_id = ?', [id]);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};