const express = require("express")
const { getAllProducts, postProducts } = require("./controller")
const router = express.Router()


router.get("/",getAllProducts)

router.post("/",postProducts)

module.exports=router