"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const shoppingListRoutes_1 = __importDefault(require("./routes/shoppingListRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Using CORS middleware
// MySQL Configuration
const db = mysql_1.default.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// Connect to MySQL
db.connect((err) => {
    if (err)
        throw err;
    console.log('Connected to MySQL');
});
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/todo', todoRoutes_1.default);
app.use('/api/shopping-list', shoppingListRoutes_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
