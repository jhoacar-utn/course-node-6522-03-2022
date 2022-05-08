const Animals = require("../model/animal")

module.exports.get_animals = (req,res)=>{
    return res.json(Animals.getAll());
}