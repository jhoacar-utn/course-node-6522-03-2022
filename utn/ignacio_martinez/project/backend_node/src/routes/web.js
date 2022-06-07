const express = require("express");

const {authMiddleware} = require("../middleware/authMiddleware");

const route = express.Router();

route.get("/", handleWelcomeWeb);