const express = require('express');
const app = express();

const webRouter = require('../routes/web');
const apiRouter = require('../routes/api');

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1',apiRouter);
app.use('/',webRouter);

module.exports = app;