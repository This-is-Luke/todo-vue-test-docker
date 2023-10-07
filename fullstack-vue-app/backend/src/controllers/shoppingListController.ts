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

  export const addItem = async (req: Request, res: Response) => {
    const { item_name, quantity, type, status } = req.body;
    const userId = req.user.id;  // Assuming req.user contains the decoded JWT
  
    // Check if item already exists
    const [existingRows] = await db.query('SELECT * FROM shopping_list WHERE item_name = ? AND userId = ?', [item_name, userId]) as unknown as [RowDataPacket[]];
    if (existingRows.length > 0) {
      return res.status(400).json({ message: 'Item already exists' });
    }
  
    try {
      // Insert the new item
      await db.query('INSERT INTO shopping_list (item_name, quantity, type, status, userId) VALUES (?, ?, ?, ?, ?)', [item_name, quantity, type, status, userId]);
      res.status(201).json({ message: 'Item added successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error adding item', error });
    }
  };
  


// Update item
export const updateItem = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    // Fetch the existing item
    const [existingRows] = await db.query('SELECT * FROM shopping_list WHERE item_id = ?', [id]) as unknown as [RowDataPacket[]];
    const existingItem = existingRows[0];

    // Merge existing item with updates
    const updatedItem = { ...existingItem, ...updates };

    // Perform the update
    await db.query('UPDATE shopping_list SET item_name = ?, quantity = ?, type = ?, status = ? WHERE item_id = ?', [updatedItem.item_name, updatedItem.quantity, updatedItem.type, updatedItem.status, id]);
    
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