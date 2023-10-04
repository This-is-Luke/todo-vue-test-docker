"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Create Shopping List
router.post('/shopping-list', (req, res) => {
    // Your code here
});
// Update Shopping List
router.put('/shopping-list/:id', (req, res) => {
    // Your code here
});
// ... other shopping list endpoints
exports.default = router;
