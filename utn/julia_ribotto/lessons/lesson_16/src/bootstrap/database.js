const {connection, MYSQL, MONGO} = require("../config/database");

switch(connection){

    case MYSQL:
        console.log("Using MySQL");
        break;
    case MONGO:
        console.log("Using MongoDB");
        break;
    default:
        throw `Must specify a connection: ${MONGO} or ${MYSQL} not ${connection}`;
}

const init = () => {
    console.log("Starting connection with database");
}

module.exports = init;