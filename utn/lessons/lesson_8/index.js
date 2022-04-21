require('dotenv').config()

const express = require("express");
const app = express();

const {connectToServer} = require("./config/mongo/connection");
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

const PORT = process.env.PORT || 5000;

app.use("/api",apiRoute);
app.use("/",webRoute);
app.use(express.json());    // <==== parse request body as JSON;


app.listen(PORT, ()=>{
    
    console.log("Server on port "+PORT);

    connectToServer().then(()=>{
        console.log("Conection established");
    }).catch((error)=>{
        console.log("Connection refused");
        console.log(error)
    })

});