const express = require("express");
const route = express.Router();

route.use("/create_animal",express.static(__dirname+"/../"))


const {get_animals,create_animal} = require('../controller/animalController');

route.get("/animals",get_animals);

route.get("/create_animal",create_animal);


module.exports = route;