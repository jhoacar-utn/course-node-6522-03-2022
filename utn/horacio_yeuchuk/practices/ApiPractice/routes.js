const express=require('express');

const router = express.Router();


const {getAllProducts,postProduct}=require('./controllers');

router.get("/",getAllProducts);

router.post("/",postProduct);


module.exports = router
