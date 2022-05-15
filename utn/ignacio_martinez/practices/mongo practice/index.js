const express = require("express");
const app = express();
const PORT = 5000;
const route_users = require("./routes/userRoute");
const {connectToServer, getDb} = require("./config/mongo/mongoConnection");

const handleRequest = async (req, res, next)=>{
        
        const dbConnect = getDb();
      
        dbConnect
          .collection("users")
          .find({})
          .toArray(function (err, result) {
            if (err) {
              res.status(400).send("Error fetching users collection!");
           } else {
              res.json(result);
            }
          });


    // res.sendFile(__dirname+"/views/index.html");
}

app.get("/",handleRequest);

app.use("/users", route_users);

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connected to server")
    });
});
