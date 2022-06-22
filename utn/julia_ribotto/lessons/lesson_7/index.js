const express = require('express');
const app = express();

const {connectToServer,getDb} = require("./config/mongo/connection")

const route_users = require("./routes/user-router");

const PORT = 4000;

const handleRequest = (request,response,next) => {
    //response.send("Welcome to my app");
    /*NODE constant -> __dirname
    response.sendFile(__dirname+"/views/welcome.html");*/

    // copied from mongo db
    const dbConnect = getDb();
  
    dbConnect 
        .collection("welcome")
        .find({})
        .toArray(function (err, result) {
            if (err) {
                response.status(400).send("Error fetching listings!");
            } else {
                response.json(result);
            }
        });
};

app.get("/",handleRequest)

/*
app.get("/users",) //muestra todos los usuarios
app.post("/users",) //sube usuario y lo guarda en la base de datos (MONGO)
*/

app.use("/users",route_users)


app.listen(PORT, ()=> {
    console.log('server on port: '+PORT);

    connectToServer((error)=>{
        if(error) {
            console.log(error);
        } else {
            console.log("connection established @.@");
        }
    });
});

