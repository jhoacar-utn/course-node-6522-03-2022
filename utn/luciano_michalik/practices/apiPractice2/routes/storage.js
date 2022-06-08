//El storage solo almacena lo que le paso y me devuelve un ID. 
//Por ejemplo, le paso el archivo de una canción y el lo guarda en un "cajoncito" 
//identificado con el ID que me devuelve. Luego yo, en tracks.js valido ese ID
//y cargo la canción desde tracks con ese ID.


const express = require("express")
const { createItem } = require("../controllers/storage")
const uploadMiddleware = require("../utils/handleStorage")
const router = express.Router()

//Los storage siempre van con el metodo post! el middleware toma solo un dato con el single

router.post("/",uploadMiddleware.single("myFile"),createItem) //myFile es el nombre que mando desde POSTMAN


module.exports = router