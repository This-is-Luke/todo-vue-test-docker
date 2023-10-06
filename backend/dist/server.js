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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const shoppingListRoutes_1 = __importDefault(require("./routes/shoppingListRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_2 = require("typeorm");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// express use
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/shopping-list', shoppingListRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
// express get mysql
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "mysql",
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + "/dist/models/**/*.js"],
                synchronize: true,
            });
            console.log("Connected to MySQL via TypeORM");
        }
        catch (err) {
            console.error("TypeORM connection error: ", err);
            process.exit(1);
            return;
        }
        // express endpoint test
        app.get('/api/shopping-list/test', (req, res) => {
            res.send('Test shopping list');
        });
        console.log((0, typeorm_2.getMetadataArgsStorage)());
        //express set server port
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    });
}
startServer();
