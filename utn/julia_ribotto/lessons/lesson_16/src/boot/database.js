const {connection, MYSQL, MONGO} = require("../config/database");

let initialization;

switch(connection){

    case MYSQL:
        console.log("Using MySQL");
        //ejecuta inicializador
        initialization = require('./mysql/init');
        break;
    case MONGO:
        console.log("Using MongoDB");
        initialization = require('./mongo/init');
        break;
    default:
        //Lanza una excepción en caso de que no se haya especificado una conexión
        throw `Must specify a connection: ${MONGO} or ${MYSQL} not ${connection}`;
}

module.exports = initialization;