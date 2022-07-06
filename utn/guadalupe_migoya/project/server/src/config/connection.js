const { connection, MONGO } = require("./database");

let initDatabase;

switch (connection) {

    
    case MONGO:
        initDatabase = require("./mongo/init"); break;
    default:
        throw `Must be specified DB_CONNECTION and only can be ${MONGO}`;
}

module.exports = initDatabase;