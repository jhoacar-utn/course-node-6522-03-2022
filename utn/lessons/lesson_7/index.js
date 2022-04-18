const express = require("express");
const app = express();

const PORT = 5000;


const handleRequest = (request,response,next)=>{
    
    //Constate de NODE => __dirname
    response.sendFile(__dirname+"/views/welcome.html");
}

app.get("/",handleRequest);



app.listen(PORT,()=>{
    console.log("Server on port "+PORT);
});