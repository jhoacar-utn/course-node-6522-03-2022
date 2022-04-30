//envía archivos HTML

const express = require('express');
const route = express.Router(); //declaro la ruta

const {handleWelcomeWeb,handleLoginWeb,handleRegisterWeb} = require("../controllers/welcomeController");

const {handleAuthLogin} = require("../controllers/authController");

route.get("/",handleWelcomeWeb);

route.get("/login",handleLoginWeb);

route.get("/register",handleRegisterWeb);

route.post("/login",handleAuthLogin)

module.exports = route;