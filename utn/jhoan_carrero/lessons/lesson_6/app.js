const express = require('express');

const animalRouter = require("./routes/Animal");

const app = express();

//http:localhost:8000/zoo/animals
app.use("/forest",animalRouter);

app.get("/",(req,res)=>{
    return res.json({message:"welcome"});
})



app.listen(8000,()=>{
    console.log("Servidor corriendo en el puerto 8000");
})