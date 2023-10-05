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
console.log("ShoppingListRoutes file is being read.");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const ShoppingList_1 = __importDefault(require("../models/ShoppingList"));
console.log("Imports are done.");
const router = express_1.default.Router();
router.post('/api/shopping-list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Inside POST /api/shopping-list route.");
    const shoppingListRepository = (0, typeorm_1.getManager)().getRepository(ShoppingList_1.default);
    const { itemName, quantity } = req.body;
    const userId = 1;
    const id = 0;
    const isPurchased = false;
    const item = new ShoppingList_1.default(id, userId, itemName, quantity, isPurchased);
    yield shoppingListRepository.save(item);
    console.log("Item saved:", item);
    return res.status(201).json(item);
}));
// Get all Shopping List items
router.get('/api/shopping-list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Inside GET /api/shopping-list route.");
    const shoppingListRepository = (0, typeorm_1.getManager)().getRepository(ShoppingList_1.default);
    const items = yield shoppingListRepository.find();
    console.log("Items fetched:", items);
    return res.json(items);
}));
// Update a Shopping List item
router.put('/shopping-list/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`PUT /shopping-list/${req.params.id} called`);
    const shoppingListRepository = (0, typeorm_1.getManager)().getRepository(ShoppingList_1.default);
    const id = Number(req.params.id);
    const { itemName, quantity } = req.body;
    yield shoppingListRepository.update(id, { itemName, quantity });
    const updatedItem = yield shoppingListRepository.findOne({ where: { id: id } });
    console.log("Item updated:", updatedItem);
    return res.json(updatedItem);
}));
// Delete a Shopping List item
router.delete('/shopping-list/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`DELETE /shopping-list/${req.params.id} called`);
    const shoppingListRepository = (0, typeorm_1.getManager)().getRepository(ShoppingList_1.default);
    const id = Number(req.params.id); // Convert string to number
    yield shoppingListRepository.delete(id);
    console.log("Item deleted:", id);
    return res.status(204).send();
}));
console.log("All routes are defined.");
exports.default = router;
