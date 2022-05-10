const express = require("express");

const route = express.Router();

const {handlewelcome}=require("../controllers/welcomeController");

const route_users=require("./userRouter")


route.get("/",handlewelcome);

route.use('/user',route_users)

module.exports=route