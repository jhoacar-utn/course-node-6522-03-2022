const Animal = require("../model/Animals") //Leer NOTA 1 dentro de "notas"


module.exports.get_animals = (req, res) => {
    return res.json(Animal.getAll())
}