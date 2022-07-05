const express = require('express');
const app = express();

const cors = require('cors');

const webRouter = require('../routers/web');
const apiRouter = require('../routers/api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);
app.use('/', webRouter);

module.exports = app;