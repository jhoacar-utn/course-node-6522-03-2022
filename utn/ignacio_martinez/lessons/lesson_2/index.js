const express = require("express");
const app = express();

// POST -> Trabaja con el body de la request -> Archivos, texto
// GET -> trabaja con los parametros de la URL localhost/productos?id=1&price=243

//:algo, :id -> Extraer la ruta req.params

const callback1 = (request, response, next) =>{

    console.log(request.params);

    next();
};

const callback2 = (request, response, next) =>{  
response.sendFile(__dirname+"/login.html")
};

const callback3 = (request, response, next) =>{
    
}

app.get("/", callback1, callback2);




app.listen(4000, ()=> {
    console.log("Listening on port 4000")
})


// document.getElemnetById("calculate").addEventListener("click", handle_)

