//en este archivo solo se crean las rutas

const express = require('express');
const route = express.Router(); //me permite trabajar con rutas
const {getAllUsers, postUser, postAvatar} = require("../controllers/userController");
const { authMiddleware } = require('../middleware/authMiddleware');
const uploadMiddleware = require("../middleware/uploadMiddleware");

route.get("/",getAllUsers);

route.post("/",postUser);

route.post("/avatar",authMiddleware,uploadMiddleware.single('avatarFile'),postAvatar);

module.exports = route;