const {connection}=require("../../config/mongo/connection")
const initialization= async()=>{
    try{
        await connection()
    console.log("Coneccion establecida con mongodb")
    }catch(error){
        console.log(error)
    }
    
    }
    
    module.exports=initialization