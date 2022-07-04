const {connection, MYSQL, MONGO} = require("../config/database");

let userModel;

switch(connection)
{
    case MYSQL:
        userModel = require("./mysql/usermodel");
        break;
    case MONGO:
        userModel = require("./mongo/userModel");
        break;
    default:
        throw `Must specified DB_CONNECTION and it only can be ${MYSQL} or ${MONGO}`;

};

module.exports = {
    userModel
};