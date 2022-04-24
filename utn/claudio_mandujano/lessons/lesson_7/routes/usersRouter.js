const express = require("express");

const route = express.Router(); // permite trabajar con rutas

const {getAllUsers, postUser} = require("../controllers/userController"); //  Destructuring


route.get("/",getAllUsers);

route.post("/",postUser);

module.exports = route;