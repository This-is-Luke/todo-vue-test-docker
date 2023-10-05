import "reflect-metadata";
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import shoppingListRoutes from './routes/shoppingListRoutes';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await createConnection({
      type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "backend/models/**/*.ts"],
      synchronize: true,
    });
    console.log("Connected to MySQL via TypeORM");
  } catch (err) {
    console.error("TypeORM connection error: ", err);
    process.exit(1);
    return;
  }

  app.use(cors());
  app.use(express.json());

  app.use('/api/shopping-list', shoppingListRoutes);
  app.use('/api/auth', authRoutes);

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
