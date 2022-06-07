require("dotenv").config()

const express = require("express");
const app = express();
const cookieSession = require("cookie-session");

app.use(express.urlencoded({extended: true}));

const webRoute = require("./routes/web")

app.use("/", webRoute);

//

//


module.exports = app;