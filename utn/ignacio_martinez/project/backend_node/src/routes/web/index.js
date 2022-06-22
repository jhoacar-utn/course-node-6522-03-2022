const express = require("express");
const router = express.Router();
const welcome = require("../../models/index");
const {handleWelcome} = require("../../controllers/welcome");

// const path = require("path");

// const {authMiddleware} = require("../../middleware/authMiddleware");

 router.get("/", handleWelcome);

 
module.exports = router;