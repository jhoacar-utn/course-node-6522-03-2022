const express = require("express");

const route = express.Router();

const {getAllUsers, postUser, postAvatar} = require("../controllers/userController");
const uploadMiddleware = require("../middleware/uploadMiddleware");

route.get("/",getAllUsers);

route.post("/",postUser);

route.post("/avatar",uploadMiddleware,postAvatar);

module.exports = route;

