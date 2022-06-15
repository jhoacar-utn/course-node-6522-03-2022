const {Sequelize} = require ('sequelize')
const {uri} = require('../dataBase')

if(!uri)
    throw 'Se debe especificar la uri de conexion como variable de entorno llamado DB_URI'

const sequelize = new Sequelize(uri)

const connection = async () => {
    await sequelize.authenticate()
}

module.exports = {
    connection,
    sequelize
}