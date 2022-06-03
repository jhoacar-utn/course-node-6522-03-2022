const {Sequelize}=require("sequelize")
const {uri}=require("../database")

if(!uri)
throw'Se debe de especificar la uri de conexion con variable de entorno llamada DB_URI'


const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 
const connection= async()=>{

    await sequelize.authenticate()
}
module.exports={
    connection,
    sequelize
}