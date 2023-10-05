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
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Todo_1 = require("../models/Todo");
const router = express_1.default.Router();
// Create Todo
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, isCompleted } = req.body;
    const entityManager = (0, typeorm_1.getManager)();
    const newTodo = new Todo_1.Todo();
    newTodo.description = description;
    newTodo.isCompleted = isCompleted;
    yield entityManager.save(Todo_1.Todo, newTodo);
    res.status(201).send("Todo created!");
}));
// Get All Todos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const entityManager = (0, typeorm_1.getManager)();
    const todos = yield entityManager.find(Todo_1.Todo);
    res.json(todos);
}));
// Delete Todo
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const entityManager = (0, typeorm_1.getManager)();
    yield entityManager.delete(Todo_1.Todo, id);
    res.status(200).send("Todo deleted!");
}));
exports.default = router;
