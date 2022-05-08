const express = require('express');
const route = express.Router(); //declaro la ruta

const route_users = require("./userRouter");

route.use("/user",route_users);

module.exports = route;