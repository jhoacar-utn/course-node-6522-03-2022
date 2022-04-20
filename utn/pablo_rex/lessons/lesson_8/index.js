const express = require ("express")
const app = express()
const PORT = 5000

const {connectToServer} = require("./config/mongo/connection");





app.listen(PORT, ()=>{

    console.log("Server is running on port " + PORT);
    connectToServer((error)=>{
        if(error)
        console.log(error);
        else console.log("connection establioshed with database mongo");
    })
})