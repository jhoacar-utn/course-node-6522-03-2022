const express = require('express');


const route = express.Router();

const {getAllUsers, postUser}= require("../controllers/userControllers")

route.get("/",getAllUsers);

route.post("/",postUser);

module.exports = route;