require('dotenv').config()//Para usar las variables de entorno
const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000

const routes = require("./routes")

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("",routes) //Apenas me conecte con localhost:8080 ira al archivo routes para ver qué hacer

app.listen(PORT,()=>{ // ()=> es una callback
    console.log(`Server corriendo en ${PORT}`)
})