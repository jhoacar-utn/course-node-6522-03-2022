//configura el servidor

const express = require('express');
const app = express();
const webRouter = require('../routes/web');

app.use("/", webRouter);

module.exports = app;