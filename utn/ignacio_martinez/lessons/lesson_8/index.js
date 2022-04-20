const express = require("express");
const app = express();

const {connectToServer, getDb} = require("./config/mongo/connection");

const PORT = 5000;

const handleRequest = (request,response,next)=>{
    const dbConnect = getDb();

    dbConnect
      .collection("welcome")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          response.status(400).send("Error fetching welcome collection!");
       } else {
          response.json(result);
        }
      });

   // response.sendFile(__dirname+"/views/welcome.html");

}
const route_users = require("./routes/userRouter");


app.get("/", handleRequest);

app.use("/usuarios",require("./routes/userRouter"));

//app.get("/users")
//app.post("/users")

app.listen(PORT, ()=>{
    console.log("Server on port" + PORT);

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("connection stablished");
        });
});