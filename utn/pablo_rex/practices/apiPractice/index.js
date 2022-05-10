const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch')
const PORT= process.env.PORT || 5000;
const app= express();
const routes=require("./routes");
app.use("",routes);
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.listen (PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
});




