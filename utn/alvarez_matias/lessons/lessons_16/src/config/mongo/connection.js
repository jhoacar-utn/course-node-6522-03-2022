const mongose = require('mongose')
const {uri} = require('../dataBase')

if(!uri)
    throw 'Se debe especificar la uri de conexion como variable de entorno llamado DB_URI'

const connection = async() => {
    await mongose.connect(uri)
}

module.exports = {
    connection
}