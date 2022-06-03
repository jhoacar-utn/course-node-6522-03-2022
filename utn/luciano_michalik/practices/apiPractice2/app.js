require("dotenv").config() //Needed for .env
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("API running on port: "+port)
})
