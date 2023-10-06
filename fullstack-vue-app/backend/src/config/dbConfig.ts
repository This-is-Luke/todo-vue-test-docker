import mysql from 'mysql2/promise';

// Create a MySQL database connection
export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'longpassword321',
    database: 'todo_app',
});

// Test the database connection
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Successfully connected to the database.');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

testConnection();