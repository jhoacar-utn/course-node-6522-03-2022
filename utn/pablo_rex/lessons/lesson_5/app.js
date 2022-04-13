const express = require('express')
const app = express()

const {get_animals} = require('./controller/AnimalController')

app.get("/", (req,res)=>{
    return res.json({message:"Welcome"})
})

app.get("animals", get_animals)



app.listen(8000, ()=>{
    console.log("Server is Running on port 8000");
})