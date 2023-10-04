import express, { Request, Response } from 'express';
import { EntityManager, getManager } from 'typeorm';
import { hashPassword, checkPassword } from '../utils/passwordUtils';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
const router = express.Router();

// Create User (Register)
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const entityManager: EntityManager = getManager();
  
  // Validate the data here...
  const hashedPassword = await hashPassword(password);
  
  const newUser = new User();
  newUser.username = username;
  newUser.email = email;
  newUser.password_hash = hashedPassword;
  
  await entityManager.save(User, newUser);
  
  res.status(201).send("User registered!");
});

// Login User
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const entityManager: EntityManager = getManager();
  
  // Validate and check user
  const user = await entityManager.findOne(User, { where: { email } });
  
  if (user && await checkPassword(password, user.password_hash)) {
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.SECRET_KEY!,
      { expiresIn: '1h' }
    );
    
    res.status(200).json({ message: "User logged in!", token });
  } else {
    res.status(401).send("Unauthorized");
  }
});

// Delete User
router.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const entityManager: EntityManager = getManager();
  
  // Delete user from database
  await entityManager.delete(User, id);
  
  res.status(200).send("User deleted!");
});

export default router;
