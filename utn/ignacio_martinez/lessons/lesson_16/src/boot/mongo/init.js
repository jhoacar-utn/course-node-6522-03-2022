const {connection} = require("../../config/mongo/connection");

const initialization = async()=>{
    try{
        await connection();
        console.log("conexion establecida con mongo");
    }catch (error){
        console.log(error)
    }
    

}

module.exports = initialization