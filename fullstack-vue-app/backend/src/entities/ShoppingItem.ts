import { Request, Response } from 'express';

// Mock data for shopping list items
const shoppingList = [
  { id: 1, name: 'Milk', quantity: 1 },
  { id: 2, name: 'Eggs', quantity: 12 },
  { id: 3, name: 'Bread', quantity: 1 }
];

// Get all shopping list items
export const getAllItems = (req: Request, res: Response) => {
  res.status(200).json({ data: shoppingList });
};

// Get a single shopping list item by ID
export const getItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = shoppingList.find(item => item.id === id);
  if (item) {
    res.status(200).json({ data: item });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

// Add a new shopping list item
export const addItem = (req: Request, res: Response) => {
  const newItem = {
    id: shoppingList.length + 1,
    name: req.body.name,
    quantity: req.body.quantity
  };
  shoppingList.push(newItem);
  res.status(201).json({ data: newItem });
};

// Update a shopping list item by ID
export const updateItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const itemIndex = shoppingList.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    shoppingList[itemIndex] = { ...shoppingList[itemIndex], ...req.body };
    res.status(200).json({ data: shoppingList[itemIndex] });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

// Delete a shopping list item by ID
export const deleteItem = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const itemIndex = shoppingList.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    shoppingList.splice(itemIndex, 1);
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};