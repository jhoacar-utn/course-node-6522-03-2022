const {connection, MYSQL, MONGO}=require("../config/database")
let welcome;

switch(connection){
    case MYSQL:
        welcome=require("./mysql/welcome")
         break;
        case MONGO:
            welcome=require("./mongo/welcome")
            break;
            default:
                throw `Se debe especificar una coneccion y tiene que ser ${MYSQL} o ${MONGO}, no debe ser ${connection} `
}


module.exports={
    welcome
}