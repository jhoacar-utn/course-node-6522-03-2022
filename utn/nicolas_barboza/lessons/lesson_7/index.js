const express = require('express');
const app = express();

const PORT = 5000;

const handleRequest = (request,response,next)=>{
    response.sendFile(__dirname+"/views/index.html")
}

app.get("/",handleRequest);

app.listen(PORT,()=>{
    console.log("server on port " +PORT)
})