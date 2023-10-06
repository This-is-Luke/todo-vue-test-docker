"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing required modules
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const express_validator_1 = require("express-validator");
const ShoppingList_1 = __importDefault(require("../models/ShoppingList"));
// Initialize the router
const router = express_1.default.Router();
// Middleware for request validation
const validateRequest = [
    (0, express_validator_1.body)('itemName').isString().withMessage('Item name must be a string'),
    (0, express_validator_1.body)('quantity').isNumeric().withMessage('Quantity must be a number'),
];
// POST route to create a new shopping list item
router.post('/', validateRequest, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { itemName, quantity } = req.body;
    const userId = 1; // Hardcoded for demonstration
    const item = new ShoppingList_1.default();
    item.userId = userId;
    item.itemName = itemName;
    item.quantity = quantity;
    item.isPurchased = false;
    const entityManager = (0, typeorm_1.getManager)();
    yield entityManager.save(ShoppingList_1.default, item);
    res.status(201).json(item);
}));
// GET route to fetch all shopping list items
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entityManager = (0, typeorm_1.getManager)();
    const items = yield entityManager.find(ShoppingList_1.default);
    if (!items) {
        return res.status(404).json({ message: 'No items found' });
    }
    res.status(200).json(items);
}));
// GET route to fetch a single shopping list item by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entityManager = (0, typeorm_1.getManager)();
    const item = yield entityManager.findOne(ShoppingList_1.default, { where: { id: Number(req.params.id) } });
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
}));
// PUT route to update a shopping list item by ID
router.put('/:id', validateRequest, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const entityManager = (0, typeorm_1.getManager)();
    const item = yield entityManager.findOne(ShoppingList_1.default, { where: { id: Number(req.params.id) } });
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const { itemName, quantity } = req.body;
    item.itemName = itemName;
    item.quantity = quantity;
    yield entityManager.save(ShoppingList_1.default, item);
    res.status(200).json(item);
}));
// DELETE route to remove a shopping list item by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entityManager = (0, typeorm_1.getManager)();
    const item = yield entityManager.findOne(ShoppingList_1.default, { where: { id: Number(req.params.id) } });
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    yield entityManager.remove(ShoppingList_1.default, item);
    res.status(200).json({ message: 'Item deleted' });
}));
// Export the router
exports.default = router;
