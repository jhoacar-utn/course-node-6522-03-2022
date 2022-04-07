const express = require("express");
const url = require('url');
const app = express();

// POST -> Trabaja con el body de la request -> Archivos, Texto [req.body]
// GET -> Trabaja con los parametros de la URL localhost/productos?id=1&price=243 [req.url]

// :algo, :id -> Extraer la ruta [req.params] 

const callback1 = (request,response,next)=>{

    console.log(request.url);
    
    next();
}

const callback2 = (request,response,next)=>{
    response.sendFile(__dirname+"/login.html");
};

const callback3 = (request,response,next)=>{
    response.sendFile(__dirname+"/dashboard.html");
};


const authorization = (request,response,next)=>{
    request.body; // { answer: 42 }
    
    console.log(request.body);
    next();
};

app.get("/",callback1,callback2);

app.post("/",authorization,callback3);


app.listen(4000,()=>{
    console.log("Se encuentra habilitado en el puerto 4000")
});