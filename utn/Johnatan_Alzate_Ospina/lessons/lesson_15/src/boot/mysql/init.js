const {connection}=require("../../config/mysql/connection")

const initialization= async()=>{
await connection()
console.log("Coneccion establecida con mysql")
}

module.exports=initialization