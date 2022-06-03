const express=require("express")
const {handlewelcome} = require("../../controllers/welcome")
const router=express.Router()

router.get("/",handlewelcome)

module.exports=router