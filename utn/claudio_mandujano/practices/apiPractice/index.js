require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true })); //peticion x get
app.use(express.json()); // por post



app.use("",routes);

app.listen(PORT,()=>{
    console.log('Server up port',PORT);

}); 


