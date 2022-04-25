const express = require("express");

const route = express.Router();

const {handleWelcome} = require("../controllers/welcomeController");

const route_users = require("./userRouter");

const route_login = require("./loginRouter");

route.get("/",handleWelcome);

route.use("/user",route_users);
route.use("/login",route_login);

module.exports = route;