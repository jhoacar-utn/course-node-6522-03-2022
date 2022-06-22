//en este archivo solo se crean las rutas

const express = require('express');
const route = express.Router(); //me permite trabajar con rutas
const {getAllUsers, postUser} = require("../controllers/userController");

route.get("/",getAllUsers);

route.post("/",postUser);

module.exports = route;