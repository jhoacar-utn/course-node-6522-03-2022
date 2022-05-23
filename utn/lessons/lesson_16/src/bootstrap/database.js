const {connection} = require("../config/database");


switch(connection){

    case 'mysql':
        console.log("A trabajar con mysql");
        break;
    case 'mongodb':
        console.log("A trabajar con mongodb");
        break;
    default:
        console.log("Se debe especificar una conexion y debe ser mysql o mongodb");
        break;
}


const init = ()=>{
    console.log("Arrancando la conexion con la base de datos");
}

module.exports = init;