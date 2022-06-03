"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//const express=require("express")
const avatar_1 = require("../controllers/avatar");
//const {}=require("../controllers/avatar")
const route = (0, express_1.Router)();
route.get("/", avatar_1.getAvatar);
route.post("/", avatar_1.postAvatar);
exports.default = route;
//module.exports=route
