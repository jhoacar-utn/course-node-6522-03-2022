const express = require("express");
const app = express();

//POST -> trabaja con el body de la request -> podes mandar archivos y texto
//GET -> trabaja con parametros de la URL localhost/productos?id=1&price=2300

// :id, :parameters -> extraer la ruta req.parameters

const callback1 = (request,response,next) => {
    const parameters = request.params;
    console.log(parameters);

    next(); //salta esta ejecución
};

const callback2 = (request,response,next) => {
    response.send("went through callback1, now excecuting callback2");
};

app.get("/:parameters", callback1, callback2);

app.listen(4000,()=>{
    console.log("Corriendo en puerto 4000");
});