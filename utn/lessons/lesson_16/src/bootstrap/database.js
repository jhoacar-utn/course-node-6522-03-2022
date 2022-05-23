const { connection, MYSQL, MONGO } = require("../config/database");


switch (connection) {

    case MYSQL:
        console.log("A trabajar con mysql");
        break;
    case MONGO:
        console.log("A trabajar con mongodb");
        break;
    default:
        throw `Se debe especificar una conexion y debe ser ${MYSQL} o ${MONGO}, no debe ser ${connection}`;
}


const init = () => {
    console.log("Arrancando la conexion con la base de datos");
}

module.exports = init;