import { hashPassword, checkPassword } from '../utils/passwordUtils';
import express, { Request, Response } from 'express';

const router = express.Router();

// Create User (Register)
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).send("All fields are required.");
    }

    const hashedPassword = await hashPassword(password);

    // Here, you'd save the user to the database
    // ...


    res.status(201).send("User registered!");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Login User
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).send("All fields are required.");
    }

    // Here, you'd validate and check the user against the database
    // ...

    res.status(200).send("User logged in!");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Delete User
router.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Here, you'd delete the user from the database
    // ...

    res.status(200).send("User deleted!");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
