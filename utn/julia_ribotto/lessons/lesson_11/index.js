require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session')

const app = express();
//const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: true })); //This enable the request.query for GET requests
//app.use(bodyParser.json()); //This enable the request.body for POST requests
app.use(express.json());    // <==== parse request body as JSON;

app.use(cookieSession({
    name: 'session',
    keys: ["key1","key2"]
}))

app.set('view engine','ejs');

const {connectToServer} = require("./config/mongo/connection");
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");

const PORT = process.env.PORT || 5000;

app.use("/api",apiRoute); //todas las rutas que voy a usar
app.use("/",webRoute);
app.use("/user",express.static(__dirname+"/storage"));

app.listen(PORT, ()=> {
    console.log('Server on port: ' + PORT);

    connectToServer().then(()=>{
        console.log("Connection established");
    }).catch((error)=>{
        console.log("Connection rejected");
        console.log(error)
    })
});