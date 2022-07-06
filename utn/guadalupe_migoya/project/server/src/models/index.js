const { connection, MONGO } = require("../config/database");

let userModel;

switch (connection) {

  
    case MONGO:
        userModel = require("./mongo/userModel"); break;
    default:
        throw `Must be specified DB_CONNECTION and only can be ${MONGO}`;
}

module.exports = {
    userModel,
};