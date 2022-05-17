import dotenv from 'dotenv';
dotenv.config();
//require("dotenv").config();

import express from 'express';
//const express = require("express");



const app = express();

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log("Server on port " + PORT);
});
