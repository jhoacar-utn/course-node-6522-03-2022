
const animal = require("../model/animal");
const path=require("path")

    //funciones async son promesas tambien
    
module.exports.get_animals = async (req,res)=>{
    
        const animals = await animal.getAll(); //Esto tambien es una promesa
    
        return res.send(animals);
    }
    module.exports.create_animal=(req,res)=>{
        return res.sendFile(path.resolve(__dirname+"/../views/create_animal.html"))    
    }

    module.exports.store_animal= async (req,res)=>{
        const data=req.body;
        const message=await animal.save(data);
        return res.json(message)
    }