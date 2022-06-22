const { default: mongoose } = require("mongoose")
const { uri } = require("../database");

if(!uri)
    throw "se debe especificar la uri de conexion como variable de entorno llamada DB_URI";

const connection = async ()=>{
    await mongoose.connect(uri);
}



module.exports = {
    connection
}