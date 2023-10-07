// Importing the 'mysql2/promise' library for MySQL database operations.
// The 'promise' variant is used to make async database calls.
import mysql from 'mysql2/promise';

// Create a MySQL database connection pool.
// Connection pools improve performance by reusing existing connections,
// rather than opening a new connection every time.
export const db = mysql.createPool({
    host: 'localhost',  // The server where your MySQL database is hosted.
    user: 'root',       // The username to log into the MySQL database.
    password: 'longpassword321',  // Password for the MySQL database.
    database: 'todo_app',  // The specific database to work with.
});

// Function to test the database connection.
// It's crucial to test the connection to ensure that your app can
// communicate with the database before performing any CRUD operations.
async function testConnection() {
  try {
    // Try to get a connection from the pool.
    const connection = await db.getConnection();
    
    // If successful, log a success message.
    console.log('Successfully connected to the database.');
    
    // Release the connection back to the pool for reuse.
    connection.release();
  } catch (error) {
    // If an error occurs, log it.
    // This could be due to incorrect credentials, network issues, etc.
    console.error('Error connecting to the database:', error);
  }
}

// Call the testConnection function to actually test the database connection.
// This is done once when the application starts.
testConnection();

// Export the database pool for use in other parts of the application.
export default db;
