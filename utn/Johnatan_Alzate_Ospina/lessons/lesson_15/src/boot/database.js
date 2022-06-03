const {connection,MYSQL,MONGO}=require("../config/database")
let initialization;
switch(connection){
    case MYSQL:/*es importante que todo case tenga un break*/
        
        initialization=require("./mysql/init")
        break;
    case MONGO:
        
        initialization=require("./mongo/init")
        break;
        default:
            throw `Se debe especificar una coneccion y tiene que ser ${MYSQL} o ${MONGO}, no debe ser ${connection} `
            
}

const init=()=>{
    console.log("Arrancando la coneccion con la base de datos")
}

module.exports=initialization