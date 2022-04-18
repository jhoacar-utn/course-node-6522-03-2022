const { response } = require("express");
const animal = require("../model/Animal");


//funciones async son promesas tambien

module.exports.get_animals = async (req,res)=>{

    const animals = await animal.getAll(); //Esto tambien es una promesa

    return res.json(animals);
}

module.exports.create_animal = (req,res)=>{
        return response.sendFile(__dirname+"../views/create_animal.html");
}
