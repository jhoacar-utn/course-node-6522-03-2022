require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {connectToServer} = require("./config/mongo/mongoConnection");

const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

app.use("/api", apiRoute);
app.use("/", webRoute)

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)

    connectToServer((error)=>{
        if(error)
            console.log(error);
        else
            console.log("Connected to server")
    });
});
