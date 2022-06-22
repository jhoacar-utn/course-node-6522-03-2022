require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');

//Para que nuestro programa pueda leer archivos json
    //Para parámetros que viajan por get:
app.use(express.urlencoded({extended:true}));
    //Para parámetros que viajan por post:
app.use(express.json());


//Defino el archivo de dónde sacará las rutas
app.use("/",routes);


app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
});

