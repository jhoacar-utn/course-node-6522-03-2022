const express = require("express");
const route = express.Router();
const {handleWelcome} = require("../controllers/welcomeController");
const route_users = require("./userRoute");

route.get("/",handleWelcome);

route.use("/users", route_users);

module.exports = route;