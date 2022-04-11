const express = require("express")

const app = express();

const {get_animals} = require("./controller/animalsController")


app.get("/",(req,res)=>{
    return res.json({message:"Welcome to my DB"})
})

app.get("/animals",get_animals) //Aca le digo qué se hará cuando llegue una peticion get hacia /animals. Haciendo esto el controlador es el que se encarga de prcesar la petición.

app.listen(8000,()=>{
    console.log("Server running in port 8000")
})