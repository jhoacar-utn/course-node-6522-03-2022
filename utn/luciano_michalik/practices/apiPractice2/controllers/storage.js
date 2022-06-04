const {storageModels} = require("../models")

const getItems = async (req,res) => {//Obtener lista de la base de datos
    const data = await storageModels.find({})//Buscar todo lo que tenga trackModels
    res.send({data})
}

const getItem = (req,res) => {//Obtener un detalle 

}
 
const createItem = async (req,res) => {//Insertar un registro
}

const updateItem = (req,res) => {//Actualizar un registro

}

const deleteItem = (req,res) => {//Eliminar registro    

}



module.exports = {getItems,getItem,createItem,updateItem,deleteItem}