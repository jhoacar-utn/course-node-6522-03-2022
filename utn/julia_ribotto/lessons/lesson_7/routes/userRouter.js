const express = require('express');

const route = express.Router(); //Router -> módulo de express

const {getAllUsers,postUser} = require("../controllers/userController") //extraigo controlador de usuarios


route.get("/", getAllUsers);

route.post("/",postUser);

module.exports = route;