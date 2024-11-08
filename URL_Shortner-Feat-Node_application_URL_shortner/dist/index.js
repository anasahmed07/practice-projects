"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlShortener_1 = require("./routes/urlShortener"); // Create this router
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// middleware
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.default)();
// routes
// handle URL Shortening
app.use('/shorten', urlShortener_1.urlShortenerRouter); // Handle URL shortening
app.get('/', (req, res) => {
    res.send('Hello, URL Shortener!');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
