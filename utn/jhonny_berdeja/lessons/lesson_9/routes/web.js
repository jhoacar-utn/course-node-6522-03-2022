const express = require("express");

const route = express.Router();

const {handleWelcomeWeb, handleLoginWeb, handleRegisterWeb} = require("../controllers/welcomeController");

route.get("/",handleWelcomeWeb);

route.get("/login",handleLoginWeb);

route.get("/register",handleRegisterWeb);


module.exports = route;