"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//require modules
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//importo ruta
const avatarRoute_1 = __importDefault(require("./routes/avatarRoute"));
//Habilito sección para el body (app.use()) 
app.use(express_1.default.json());
//Implemento ruta
app.use("/avatar", avatarRoute_1.default);
//Setup del minimal server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(">> Server on port " + PORT);
});
