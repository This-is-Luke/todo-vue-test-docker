// Import the necessary modules
import app from './app';  // Import the app object from app.ts
import dotenv from 'dotenv';  // Import dotenv for environment variable management

// Initialize dotenv to load environment variables from a .env file
dotenv.config();

// Set the port for the application to listen on
const PORT = process.env.PORT || 3000;  // Use the port from the environment variables or default to 3000

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  // Log the port number when the server starts
});
