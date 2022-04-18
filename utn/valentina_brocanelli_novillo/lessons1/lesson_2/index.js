const express = require("express");
const app = express();

//3 opciones de traer info que me mandan a traves de internet
//POST -> trabaja con el body de la request -> archivos, texto
//BODY -> trabaja con los parámetros de la URL. por ej: localhost/productos?id-1 & price-22
//:algo, :id -> extraer la ruta req.params
const callback1 = (request, response, next) =>{
    const parametros = request.params;
    console.log(request.params);
    //return response.json(parametros);
    next();

}

const callback2 = (request, response, next) =>{
    response.send("Pasé por la callback1 y ahora estoy en la callback2")
}

const authorization = (request, response, next) => {
    request.body;
    console.log(request.body);
    next()
}


app.get("/:parametro", callback1, callback2);

app.listen(4000, ()=>{
    console.log("Puerto corriendo en 4000")
})