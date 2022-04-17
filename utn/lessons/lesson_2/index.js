const express = require("express");
const url = require('url');
const app = express();

// POST -> Trabaja con el body de la request -> Archivos, Texto [req.body]
// GET -> Trabaja con los parametros de la URL localhost/productos?id=1&price=243 [req.url]

// :algo, :id -> Extraer la ruta [req.params]  

const principal = (request,response,next)=>{

    const parametros = request.params;

    if(parametros.variable == "limpieza")
    {
        const url = request.protocol + "://" + request.host + request.url;
        console.log(url);
        const current_url = new URL(url);
        const params = new URLSearchParams(current_url.search);
        console.log(params);
    }

    next();
    
}

const login = (request,response,next)=>{
    response.sendFile(__dirname+"/login.html");
};

const dashboard = (request,response,next)=>{
    response.sendFile(__dirname+"/dashboard.html");
};


const authorization = (request,response,next)=>{
    request.body; // { answer: 42 }
    
    console.log(request.body);
    next();
};

app.get("/",principal,login);

app.post("/",authorization,dashboard);


app.listen(4000,()=>{
    console.log("Se encuentra habilitado en el puerto 4000")
});