const express = require("express");

const route = express.Router();

const {getAllUsers, postUser} = require("../controllers/userController");

route.get("/",getAllUsers); //Las rutas solo crean rutas. Los controladores "controlan" las rutas

route.post("/",postUser);

module.exports = route;

