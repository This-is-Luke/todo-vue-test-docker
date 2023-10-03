const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.use(cors());

app.get('/todos', (req, res) => {
  connection.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/todos', (req, res) => {
  // Assume req.body contains { text: 'new todo', completed: false }
  const newTodo = req.body;
  connection.query('INSERT INTO todos SET ?', newTodo, (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, ...newTodo });
  });
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'todo_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});