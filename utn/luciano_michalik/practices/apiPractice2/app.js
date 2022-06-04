require("dotenv").config() //Needed for .env
const express = require("express")
const cors = require("cors")
const app = express()
const dbConnect = require("./config/mongo")
const router = require("./routes")//Esto es lo mismo que indicarle que vaya a /routes/index
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())//Esta linea permite recibir datos via json cuando hago un post

app.use("/api",router)//Se dirige a index.js de la carpeta routes


app.listen(port,()=>{
    console.log("API running on port: "+port)
})

dbConnect()
