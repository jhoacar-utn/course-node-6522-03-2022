const express = require("express");

const route = express.Router();

const {loginUser, logoUser} = require("../controllers/userController");

route.post("/",getAllUsers);

route.post("/",postUser);

module.exports = route;

