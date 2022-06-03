import  { Router } from "express"
//const express=require("express")

import {getAvatar,postAvatar} from "../controllers/avatar"
//const {}=require("../controllers/avatar")
const route:Router=Router()


route.get("/",getAvatar)

route.post("/",postAvatar)
export default route
//module.exports=route