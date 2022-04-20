//const express = require("express");
//const app = express();

const { handleWelcome } = require("../controllers/welcomeController");
const { route } = require("./userRouter");
const route_users = require("./userRouter");

route.get("/", handleWelcome);

route.use("/user", route_users);

module.exports = route;