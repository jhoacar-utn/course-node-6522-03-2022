const get_animals = require('./controller/AnimalController')
const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    return res.json({message:"welcome"})
})
app.get("/animals",get_animals)

app.listen(4000,()=>{
    console.assert("Server on port 4000")
})