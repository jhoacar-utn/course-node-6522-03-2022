const express = require("express");

const route = express.Router();

const {handlewelcomeWeb}=require("../controllers/welcomeController");

route.get("/",handlewelcomeWeb);


module.exports=route