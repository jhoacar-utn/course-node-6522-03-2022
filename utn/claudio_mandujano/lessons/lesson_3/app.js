const express = require('express');

const {get_animals} = require('./controller/animalController');


const app = express();


app.get("/",(req,res)=>{
    return res.json({message:"Welcome"})
})


app.get("/animals",get_animals)
    



app.listen(8000,()=>{
    console.log("Servidor corriendo en el puerto 8000");
});

