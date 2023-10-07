// Importing the required types for Express and MySQL
import { Request, Response } from 'express'; // Types for Express request and response objects
import { RowDataPacket } from 'mysql2'; // MySQL row data packet type for type assertion
import { db } from '../config/dbConfig'; // Importing the database configuration

// Function to Get All Items from the Shopping List
export const getAllItems = async (req: Request, res: Response) => {
  try {
    // Querying the database to fetch all items from the shopping_list table
    const [rows] = await db.query('SELECT * FROM shopping_list');
    // Sending the fetched rows as JSON response
    res.status(200).json(rows);
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to Get a Specific Item by its ID
export const getItemById = async (req: Request, res: Response) => {
  // Extracting the item ID from the request parameters
  const id = req.params.id;

  try {
    // Querying the database to fetch the item with the specified ID
    const [rows] = await db.query('SELECT * FROM shopping_list WHERE item_id = ?', [id]) as unknown as [RowDataPacket[]];
    // Sending the first row (our item) as JSON response
    res.status(200).json(rows[0]);
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to Add a New Item to the Shopping List
export const addItem = async (req: Request, res: Response) => {
  // Extracting item details from the request body
  const { item_name, quantity, type, status } = req.body;
  // Extracting the user ID from the decoded JWT (assumed to be in req.user)
  const userId = req.user.id;

  // Check if the item already exists for the user
  const [existingRows] = await db.query('SELECT * FROM shopping_list WHERE item_name = ? AND userId = ?', [item_name, userId]) as unknown as [RowDataPacket[]];
  if (existingRows.length > 0) {
    // If item already exists, send a 400 Bad Request response
    return res.status(400).json({ message: 'Item already exists' });
  }

  try {
    // Inserting the new item into the shopping_list table
    await db.query('INSERT INTO shopping_list (item_name, quantity, type, status, userId) VALUES (?, ?, ?, ?, ?)', [item_name, quantity, type, status, userId]);
    // Sending a 201 Created response
    res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
    // Handling any errors during item insertion
    res.status(400).json({ message: 'Error adding item', error });
  }
};

// Function to Update an Existing Item
export const updateItem = async (req: Request, res: Response) => {
  // Extracting the item ID from the request parameters
  const id = req.params.id;
  // Extracting the updates from the request body
  const updates = req.body;

  try {
    // Fetching the existing item from the shopping_list table
    const [existingRows] = await db.query('SELECT * FROM shopping_list WHERE item_id = ?', [id]) as unknown as [RowDataPacket[]];
    const existingItem = existingRows[0];

    // Merging the existing item data with the updates
    const updatedItem = { ...existingItem, ...updates };

    // Updating the item in the shopping_list table
    await db.query('UPDATE shopping_list SET item_name = ?, quantity = ?, type = ?, status = ? WHERE item_id = ?', [updatedItem.item_name, updatedItem.quantity, updatedItem.type, updatedItem.status, id]);
    // Sending a 200 OK response
    res.status(200).json({ message: 'Item updated successfully' });
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to Delete an Item
export const deleteItem = async (req: Request, res: Response) => {
  // Extracting the item ID from the request parameters
  const id = req.params.id;

  try {
    // Deleting the item from the shopping_list table
    await db.query('DELETE FROM shopping_list WHERE item_id = ?', [id]);
    // Sending a 200 OK response
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    // Handling any server errors
    res.status(500).json({ message: 'Server error', error });
  }
};
