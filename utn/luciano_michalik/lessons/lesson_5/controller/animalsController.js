const animal = require("../model/Animals") //Leer NOTA 1 dentro de "notas"


module.exports.get_animals = async (req, res) => {
    const rta = await animal.getAll() //En todos lugares que se use la funcion "getAll()" debe ir un await y async
    return res.json(rta)
}

