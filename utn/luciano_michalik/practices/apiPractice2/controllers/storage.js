const {storageModels} = require("../models")//No hace falta indicar el index.js ya que cuando se llama "index.js" no es necesario nombrarlo
const PUBLIC_URL = process.env.PUBLIC_URL



const getItems = async (req,res) => {//Obtener lista de la base de datos
  
}

const getItem = (req,res) => {//Obtener un detalle 

}
 
const createItem = async (req,res) => {//Insertar un registro
    const {body,file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModels.create(fileData)
    res.send(data)

}

const updateItem = (req,res) => {//Actualizar un registro

}

const deleteItem = (req,res) => {//Eliminar registro    

}



module.exports = {getItems,getItem,createItem,updateItem,deleteItem}