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
const passwordUtils_1 = require("../utils/passwordUtils");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Create User (Register)
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).send("All fields are required.");
        }
        const hashedPassword = yield (0, passwordUtils_1.hashPassword)(password);
        // Here, you'd save the user to the database
        // ...
        res.status(201).send("User registered!");
    }
    catch (error) {
        res.status(500).send("Server error");
    }
}));
// Login User
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Basic validation
        if (!email || !password) {
            return res.status(400).send("All fields are required.");
        }
        // Here, you'd validate and check the user against the database
        // ...
        res.status(200).send("User logged in!");
    }
    catch (error) {
        res.status(500).send("Server error");
    }
}));
// Delete User
router.delete('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Here, you'd delete the user from the database
        // ...
        res.status(200).send("User deleted!");
    }
    catch (error) {
        res.status(500).send("Server error");
    }
}));
exports.default = router;
