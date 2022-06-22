const express = require("express");
const route = express.Router();
const {handleWelcomeWeb} = require("../controllers/welcomeController");


route.get("/",handleWelcomeWeb);


module.exports = route;