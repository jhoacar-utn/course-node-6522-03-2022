const animal = require("../model/Animal");


module.exports.get_animals = (req,res)=>{
    return res.json(animal.getAll());
}