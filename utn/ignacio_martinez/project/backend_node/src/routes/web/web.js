const express = require("express");
const router = express.Router();

// const path = require("path");

const {authMiddleware} = require("../../middleware/authMiddleware");

const route = express.Router();

route.get("/", handleWelcomeWeb);




module.exports = router;