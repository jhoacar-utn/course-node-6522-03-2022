require("dotenv").config()

const express = require("express");
const app = express();
// const cookieSession = require("cookie-session");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const webRouter = require("../routes/web");
const apiRouter = require("../routes/api");
const userRouter = require("../routes/users");

app.use("/api/v1",apiRouter);
app.use("/", webRouter);



module.exports = app;