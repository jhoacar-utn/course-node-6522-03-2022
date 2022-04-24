const express = require("express");
const app = express();

const {connectToServer} = require("./config/mongo/connection");
const { connect } = require("./routes/usersRouter");

const route_users = require("./routes/usersRouter")

const PORT = 5001;


const handleRequest = (request,response,next)=>{

    //Constante de NODE => __dirname
    response.sendFile(__dirname+"/views/welcome.html")
}

app.get("/", handleRequest);

app.use("/user",route_users);

app.listen(PORT,()=>{
    console.log("Server on port "+PORT)

    connectToServer((error)=>{
        if(error)
            console.log(error);
            else
            console.log("connection successfully")
    })

})


