const animal = require('../model/Animal');

const path = require("path")
 
module.exports.get_animals = async (req,res) => { //async = promesa
    const animals = await animal.getAll();

    return res.json(animals);
};

module.exports.create_animal = (request,response) => {
    return response.sendFile(path.resolve(__dirname + '/../views/create_animal.html'));
}

module.exports.store_animal = (request,response) => {

    const data = request.body;
    
    const message = animal.save(data);

    return response.json(message)
}