const express = require("express");
const app = express();

const {connectToServer,getDb} = require("./config/mongo/connection");

const route_users = require("./routes/userRouter");


const PORT = 5000;


const handleRequest = (request,response,next)=>{
    
    const dbConnect = getDb();
    dbConnect
        .collection("welcome")
        .find({})
        .toArray(function (err, result) {
            if (err) 
                response.status(400).send("Error fetching welcome collection!");
            else 
                response.json(result);
        })
    //Constate de NODE => __dirname
    //response.sendFile(__dirname+"/views/welcome.html");
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