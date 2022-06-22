const animal = require("../model/Animals") //Leer NOTA 1 dentro de "notas"
const path = require("path")
const { response } = require("express")


module.exports.get_animals = async (req, res) => {
    const rta = await animal.getAll() //En todos lugares que se use la funcion "getAll()" debe ir un await y async
    return res.json(rta)
}

module.exports.create_animal = (req, res) => {
    return res.sendFile(path.resolve(__dirname+"/../createAnimal.html")) //El __dirname devuelve la ruta específica de dónde se encuentra create_animal tomando como base la carpeta desde donde se lo llama. El "/../" es para ubicar correctamente el archivo 
}

module.exports.store_animal = async (req, res) => {
    const data = req.body
    const message = await animal.save(data) //Save es un metodo del modelo "animal"

    return response.json(message)
    
}