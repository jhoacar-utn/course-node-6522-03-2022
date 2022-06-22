require("dotenv").config()
const cookieSession = require("cookie-session");
const express = require('express');
const app = express();

const server = require("./boot/server");

const PORT = process.env.PORT || 5050;

server.listen(PORT, ()=>{
    console.log("Server running on port "+ PORT);
    
});

app.get("/",(req,res)=>{
    res.send('Soy Ignacio');
})

module.exports = app;