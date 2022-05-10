const { application } = require("express")
const express=require("express")
const route=express.Router()

const {getAllUser,postUser}=require("../controllers/userControler")

route.get("/",getAllUser)
route.post("/",postUser)

module.exports= route//se exporta para poder usarlo
