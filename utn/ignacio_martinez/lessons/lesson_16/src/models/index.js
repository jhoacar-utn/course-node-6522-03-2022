const {connection, MYSQL, MONGO} = require("../config/database")

let welcome;

switch (connection){
    case MYSQL:
        welcome= require("./mysql/welcome")
        break;
    case MONGO:
        welcome= require("./mongo/welcome")
        break;
    default:
        throw "se debe especificar una conexion";
}

module.exports = {
    welcome
}