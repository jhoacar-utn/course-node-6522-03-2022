//envía archivos HTML

const express = require('express');
const route = express.Router(); //declaro la ruta

const {handleWelcomeWeb} = require("../controllers/welcomeController");

route.get("/",handleWelcomeWeb);

module.exports = route;