import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';
import shoppingListRoutes from './routes/shoppingListRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Using CORS middleware

// MySQL Configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRoutes);
app.use('/api/shopping-list', shoppingListRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
