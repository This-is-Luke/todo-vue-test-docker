"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Create Todo
router.post('/todo', (req, res) => {
    // Your code here
});
// Update Todo
router.put('/todo/:id', (req, res) => {
    // Your code here
});
// ... other todo endpoints
exports.default = router;
