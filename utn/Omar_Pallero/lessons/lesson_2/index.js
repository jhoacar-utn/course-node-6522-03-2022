const express = require("express");
const app = express();

// POST -> Trabaja con el body de la request ->Archivos, Texto
// GET  -> Trabaja con los parametros de la URL localhost/productos?id=1&price-243
// :algo. :id -> Extraer la ruta req.params
const callback1 = (request,response,next)=>{

    console.log = (request.params);

    next();

};

const callback2 = (request,response,next)=>{
    response.send("Pase por la callback1 y por la callback2");

};
const authorization = (request, response, next)=>{
    
    request.paramas
};


app.get("/:parametro",callback1,callback2);



app.listen(5000,()=>{
    console.log("Se encuentra habilitado en el puerto 5000")
});
