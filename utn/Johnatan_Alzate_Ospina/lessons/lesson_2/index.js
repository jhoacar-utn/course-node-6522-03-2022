const express= require('express')
const app=express()

app.get("/",(req,res)=>{
    app.res("hola")
})
app.listen(4000,()=>{
    console.log("Se encuentra habilitado en el puerto 4000")
})
