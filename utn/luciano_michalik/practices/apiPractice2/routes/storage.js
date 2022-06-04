const express = require("express")
const { createItem } = require("../controllers/storage")
const uploadMiddleware = require("../utils/handleStorage")
const router = express.Router()

//Los storage siempre van con el metodo post! el middleware toma solo un dato con el single

router.post("/",uploadMiddleware.single("myFile"),createItem)


module.exports = router