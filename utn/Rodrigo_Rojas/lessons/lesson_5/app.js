const express = require ("express")
const app = express()

const {get_animals} = require('./controller/Animalscontroller')

app.get("/",(req,res)=>{
    return res.json({message:'welcome'})
})

app.get('/animals',get_animals)

app.listen(8000,()=>{
    console.log("Servidor corriendo en el puerto 8000")
})