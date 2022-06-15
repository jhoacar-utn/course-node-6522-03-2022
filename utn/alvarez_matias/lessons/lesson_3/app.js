const express = require('express')
const app = express()
const PORT = 8000
const {get_animals} = require('./controller/AnimalController')

app.get('/', (req,res)=> {
    return res.json({message: 'Welcome'})
})

app.get('/animals',get_animals)

app.listen(PORT, ()=> {
    console.log("Servidor corriendo en el puerto", PORT )
})