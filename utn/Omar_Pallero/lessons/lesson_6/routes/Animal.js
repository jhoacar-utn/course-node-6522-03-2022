const express = require("express");

const route = express.Router();

const {get_animals,create_animal} = require('../controller/AnimalController');

route.get("/animals",get_animals);

route.get("/create_animal",create_animal);

module.exports = route;