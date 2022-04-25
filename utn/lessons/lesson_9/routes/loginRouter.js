const express = require("express");

const route = express.Router();

const {loginUser, logoutUser} = require("../controllers/userController");

route.post("/",getAllUsers);

route.post("/",postUser);

module.exports = route;