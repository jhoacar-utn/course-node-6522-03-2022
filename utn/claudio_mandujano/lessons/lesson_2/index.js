const express = require("express");
const { response } = require("../lesson_1");
const app = express();




app.get("/",(req,res,next)=>{
        
})


app.listen(4000, ()=>{
	console.log("Servidor corriendo en puerto 4000")
})
