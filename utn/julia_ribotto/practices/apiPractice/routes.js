const express = require('express');
const router = express.Router();
const {getAllProducts, postProduct} = require('./controller');

router.get("/",getAllProducts);

router.post("/",postProduct);

module.exports = router;