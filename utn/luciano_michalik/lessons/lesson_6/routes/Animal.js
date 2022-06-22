const express = require("express")
const route = express.Router()


const {get_animals,create_animal,store_animal} = require("../controller/animalsController")



route.get("/animals",get_animals);//Aca le digo qué se hará cuando llegue una peticion get hacia /animals. Haciendo esto el controlador es el que se encarga de prcesar la petición.
route.get("/create_animal",create_animal)
route.post("/create_animal",store_animal)

module.exports = route; //Export route 