const res = require("express/lib/response");
const animal = require("../model/animal");


module.exports.get_animals = (req,res)=>{
    return res.json(animal.getAll());
  }