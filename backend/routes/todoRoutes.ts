import express, { Request, Response } from 'express';
import { EntityManager, getManager } from 'typeorm';
import { Todo } from '../models/Todo';

const router = express.Router();

// Create Todo
router.post('/', async (req: Request, res: Response) => {
  const { description, isCompleted } = req.body;
  const entityManager: EntityManager = getManager();
  
  const newTodo = new Todo();
  newTodo.description = description;
  newTodo.isCompleted = isCompleted;
  
  await entityManager.save(Todo, newTodo);
  
  res.status(201).send("Todo created!");
});

// Get All Todos
router.get('/', async (req: Request, res: Response) => {
  const entityManager: EntityManager = getManager();
  const todos = await entityManager.find(Todo);
  
  res.json(todos);
});

// Delete Todo
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const entityManager: EntityManager = getManager();
  
  await entityManager.delete(Todo, id);
  
  res.status(200).send("Todo deleted!");
});

export default router;
