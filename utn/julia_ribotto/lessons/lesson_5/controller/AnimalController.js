const animal = require('../model/Animal');
 
module.exports.get_animals = async (req,res) => {
    const animals = await animal.getAll();

    return res.json(animals);
};