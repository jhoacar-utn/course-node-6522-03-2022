const express = require("express");
const app = express();

const webRouter = require("../routes/web");
const apiRouter = require("../routes/api");

app.use(express.json()); // -> req.body -> POST
app.use(express.urlencoded({extended:true}));  // -> req.query -> GET


app.use("/api/v1",apiRouter);
app.use("/",webRouter);


module.exports = app;