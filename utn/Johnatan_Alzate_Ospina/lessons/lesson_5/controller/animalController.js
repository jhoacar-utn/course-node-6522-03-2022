const { response } = require("express");
const animal = require("./model/animal");
const path=require("path")

    //funciones async son promesas tambien
    
module.exports.get_animals = async (req,res)=>{
    
        const animals = await animal.getAll(); //Esto tambien es una promesa
    
        return res.json(animals);
    }
    module.exports.create_animal=(req,res)=>{
        return response.sendFile(path.resolve(__dirname+"/../views/create_animal.html"))

    }
    module.exports.store_animal=(req,res)=>{
        const data=req.body;
        const mesage=animal.save(data);
        return response.json(mesage)
    }