require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {connectToServer} = require("./config/mongo/mongoConnection");

const main_route = require("./routes/indexRoute");

app.use("/", main_route);

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connected to server")
    });
});
