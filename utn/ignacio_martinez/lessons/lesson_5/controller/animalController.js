const animal = require("../model/Animal")




const get_animal = (req,res)=>{
    return res.json(Animal.get)
}