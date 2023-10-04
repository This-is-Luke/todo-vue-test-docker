import express from 'express';
import mysql from 'mysql';
import cors from 'cors'; // <-- Import CORS package
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';
import shoppingListRoutes from './routes/shoppingListRoutes';

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // <-- Use CORS middleware

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your actual MySQL password
  database: ''  // Replace with your actual MySQL database name
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

// Set up a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, World! Your backend is up and running.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
