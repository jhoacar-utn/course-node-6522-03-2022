"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const avatarController_1 = require("../controllers/avatarController");
route.get("/", avatarController_1.getAvatar);
route.post("/", avatarController_1.postAvatar);
exports.default = route;
//module.exports = route;
