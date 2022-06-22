//envía archivos HTML

const express = require('express');
const {authMiddleware} = require("../middleware/authMiddleware")
const route = express.Router(); //declaro la ruta

const {handleWelcomeWeb,handleLoginWeb,handleRegisterWeb, handleDashboardWeb} = require("../controllers/welcomeController");

const {handleAuthLogin} = require("../controllers/authController");

route.get("/",handleWelcomeWeb);

route.get("/login",handleLoginWeb);

route.get("/register",handleRegisterWeb);

route.get("/dashboard", authMiddleware, handleDashboardWeb);

route.post("/login",handleAuthLogin)

module.exports = route;