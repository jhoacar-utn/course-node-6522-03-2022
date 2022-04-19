const express = require("express");
const app = express();

const {connectToServer} = require("./config/mongo/connection");

const route_users = require("./routes/userRouter");


const PORT = 5000;


const handleRequest = (request,response,next)=>{
    
    //Constate de NODE => __dirname
    response.sendFile(__dirname+"/views/welcome.html");
}

app.get("/",handleRequest);

app.use("/user",route_users);


app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connection established");
    });

});