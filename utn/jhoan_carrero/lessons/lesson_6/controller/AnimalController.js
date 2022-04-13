const animal = require("../model/Animal");


//funciones async son promesas tambien

module.exports.get_animals = async (req,res)=>{

    const animals = await animal.getAll(); //Esto tambien es una promesa

    return res.send(animals);
}

module.exports.create_animal = (request,response)=>{

    return response.sendFile(__dirname+"create_animal.html");
}