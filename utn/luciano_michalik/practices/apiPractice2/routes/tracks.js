const express = require("express")
const { getItems, getItem, createItem } = require("../controllers/tracks")
const customHeader = require("../middleware/customHeader")
const validatorCreateItem = require("../validators/tracks")
const router = express.Router()

router.get("/",getItems)
router.post("/",validatorCreateItem,customHeader,createItem) //Pongo el validator como middleware


module.exports = router