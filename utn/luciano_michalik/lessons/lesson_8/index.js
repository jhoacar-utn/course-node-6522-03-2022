require('dotenv').config() //take from documentation. Needed for init dotenv

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true })); //This enable the request.query for GET requests
app.use(bodyParser.json()); //This enable the request.body for POST requests
//app.use(express.json());    // <==== parse request body as JSON;

const { connectToServer } = require("./config/mongo/connection");
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

const PORT = process.env.PORT || 5000; //process.env -> access to ".env" file. || indicates the default port in case of problem with the original one

app.use("/api", apiRoute);
app.use("/", webRoute);


app.listen(PORT, () => {

    console.log("Server on port " + PORT);

    connectToServer().then(() => {
        console.log("Conection established");
    }).catch((error) => {
        console.log("Connection refused");
        console.log(error)
    })

});