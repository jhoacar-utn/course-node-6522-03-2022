const express=require('express')
const route=express.Router()




const {get_animals, create_animal,store_animal}=require('../controller/animalController')

route.get("/animals",get_animals)
route.get("/create_animal",create_animal)
//app.get("/animales",get_animals);
route.post("/create_animal",store_animal)
module.exports=route