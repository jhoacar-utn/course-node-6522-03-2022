const monggose=require("mongoose")
const {uri}=require("../database")

if(!uri)
throw'Se debe de especificar la uri de conexion con variable de entorno llamada DB_URI'



const connection= async()=>{

    await monggose.connect(uri)
}
module.exports={
    connection,
   
}