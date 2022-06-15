const {connection, MYSQL, MONGO} = require('../config/dataBase')

let welcome

switch (connection) {
    case MYSQL:
        
        break;
    case MONGO:
        break;

    default:
        throw
}