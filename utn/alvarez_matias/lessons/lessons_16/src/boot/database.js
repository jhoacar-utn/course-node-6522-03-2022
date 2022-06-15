const {connection, MYSQL, MONGO} = require('../config/dataBase')

let initialization

switch(connection) {
    case MYSQL:
        console.log(`A trabjar con ${MYSQL}`)
        initialization = require('./mysql/init')
    break
    case MONGO:
        console.log.og(`A trabajar con ${MONGO}`)
        initialization = require('./mongo/init')
    break
    default:
        throw `Se debe especificar una connecion y debe ser ${MYSQL} o ${MONGO}, no debe ser ${connection}`
}

module.exports = initialization