const express = require('express');
const router = express.Router();
const {getAllProducts,postProducts} = require("./controllers");

router.get("/",getAllProducts);

router.post("/",postProducts)

module.exports= router
