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
const passwordUtils_1 = require("../utils/passwordUtils");
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
// Create User (Register)
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const entityManager = (0, typeorm_1.getManager)();
    // Validate the data here...
    const hashedPassword = yield (0, passwordUtils_1.hashPassword)(password);
    const newUser = new User_1.User();
    newUser.username = username;
    newUser.email = email;
    newUser.password_hash = hashedPassword;
    yield entityManager.save(User_1.User, newUser);
    res.status(201).send("User registered!");
}));
// Login User
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const entityManager = (0, typeorm_1.getManager)();
    // Validate and check user
    const user = yield entityManager.findOne(User_1.User, { where: { email } });
    if (user && (yield (0, passwordUtils_1.checkPassword)(password, user.password_hash))) {
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: "User logged in!", token });
    }
    else {
        res.status(401).send("Unauthorized");
    }
}));
// Delete User
router.delete('/user/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const entityManager = (0, typeorm_1.getManager)();
    // Delete user from database
    yield entityManager.delete(User_1.User, id);
    res.status(200).send("User deleted!");
}));
exports.default = router;
