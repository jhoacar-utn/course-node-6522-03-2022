const animal = require("../model/Animal");

const path = require("path");

//funciones async son promesas tambien

module.exports.get_animals = async (req,res)=>{

    const animals = await animal.getAll(); //Esto tambien es una promesa

    return res.send(animals);
}

module.exports.create_animal = (request,response)=>{

    // lesson_6/controller/../views/create_animal.html -> ESTO NO LE VA A GUSTAR a sendFile
    // lesson_6/views/create_animal.html -> ESTO ESTA BIEN
    
    return response.sendFile(path.resolve(__dirname+"/../views/create_animal.html"));
}