const express = require("express");
const app = express();

const {connectToServer} = require("./config/mongo/connection");


const PORT = 5001;


app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connection established");
    });

});