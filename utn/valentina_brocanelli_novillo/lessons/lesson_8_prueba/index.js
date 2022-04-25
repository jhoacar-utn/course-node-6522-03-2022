require('dotenv').config()

const express = require("express");
const app = express();

const {connectToServer} = require("./config/mongo/connection");
const main_route = require("./routes/index");

const PORT = process.env.PORT || 5000;

app.use("/",main_route);

app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connection established");
    });

});