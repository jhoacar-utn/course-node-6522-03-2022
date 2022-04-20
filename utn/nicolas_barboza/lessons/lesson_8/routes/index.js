const express = require('express');
const app = express();

const { handleWelcome } = require("../controllers/welcomeController");
const route_users = require("./userRouter")

route.get("/",handleWelcome);

route.use("/usuarios", route_users);


module.exports= route;

