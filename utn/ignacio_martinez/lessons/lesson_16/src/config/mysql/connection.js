const { Sequelize } = require("sequelize");
const {uri} = require("../database")

if(!uri)
    throw "se debe especificar la uri de conexion como variable de entorno llamada DB_URI";

const sequelize = new Sequelize("postgres:")

const connection = async ()=>{
    
    await sequelize.authenticate();

}

module.exports = {
    connection,
    sequelize
}