const {connection, MYSQL, MONGO} = require('../config/database');

let welcome;

switch(connection) {
    case MYSQL:
        welcome = require('./mysql/welcome');
        break;
    case MONGO:
        welcome = require('./mongo/welcome');
        break;
    default:
        throw `To choose which model will be used, you must specify a connection: ${MONGO} or ${MYSQL} not ${connection}`;
}

module.exports = {
    welcome
}