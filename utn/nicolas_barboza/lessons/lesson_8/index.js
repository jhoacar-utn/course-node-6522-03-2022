const express = require('express');
const app = express();

const {connectToServer} = require("./config/mongo/connections")

const PORT = 5000;


app.listen(PORT,()=>{
    console.log("server on port " +PORT)

    connectToServer((error)=>{
        if(error)
        console.log(error);
        else
        console.log("connection established")
    })

})