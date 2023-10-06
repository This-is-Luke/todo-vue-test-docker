import { start } from 'repl';
import app from './app';  // Import the app from app.ts
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;  // Set the port

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
