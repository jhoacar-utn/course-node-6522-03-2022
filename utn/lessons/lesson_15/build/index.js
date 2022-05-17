"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//require("dotenv").config();
const express_1 = __importDefault(require("express"));
//const express = require("express");
const avatar_1 = __importDefault(require("./routes/avatar"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/avatar", avatar_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server on port " + PORT);
});
