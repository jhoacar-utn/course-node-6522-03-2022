const express = require("express");

const route = express.Router();

const {get_animals} = require('./controller/AnimalController');

route.get("/animals",get_animals);

module.exports = route;