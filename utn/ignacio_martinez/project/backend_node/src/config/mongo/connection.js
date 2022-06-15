const { uri } = require("../database")
const mongoose = require('mongoose');

if(!uri)
    throw `Se debe especificar la uri de conexion como variable de entorno llamada DB_URI`


const connection = async ()=> {

    await mongoose.connect(uri);
}


module.exports = {
    connection
}