// const { handlewelcome } = require("../controllers/welcomeController");
// const route_users = require("./userRouter");

// route.get("/", handlewelcome);

// route.use("/users",route_users);

// module.exports = route;

const express = require("express");

const route = express.Router();

const {handleWelcome} = require("../controllers/welcomeController");
const route_users = require("./userRouter");

route.get("/",handleWelcome);

route.use("/user",route_users);

module.exports = route;