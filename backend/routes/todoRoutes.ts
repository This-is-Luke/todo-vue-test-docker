import express from 'express';
import { getRepository } from 'typeorm';
import { Todo } from '../models/Todo';

const router = express.Router();
const todoRepository = getRepository(Todo);

// Create a new Todo
router.post('/todo', async (req, res) => {
  const { description, is_home } = req.body;
  const todo = new Todo();
  todo.description = description;
  todo.is_home = is_home;
  await todoRepository.save(todo);
  return res.status(201).json(todo);
});

// Get all Todos
router.get('/todos', async (req, res) => {
  const todos = await todoRepository.find();
  return res.json(todos);
});

// Update a Todo
router.put('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { description, is_home } = req.body;
  await todoRepository.update(id, { description, is_home });
  const updatedTodo = await todoRepository.findOne(id);
  return res.json(updatedTodo);
});

// Delete a Todo
router.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  await todoRepository.delete(id);
  return res.status(204).send();
});

export default router;
