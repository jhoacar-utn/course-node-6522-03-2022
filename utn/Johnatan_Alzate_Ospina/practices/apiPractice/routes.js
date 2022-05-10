const express=require("express");
const { __esModule } = require("node-fetch");
const router=express.Router();
const{getAllproducts,postProduct}=require("./controlers")

router.get("/",getAllproducts)

router.post("/",postProduct)

module.exports=router