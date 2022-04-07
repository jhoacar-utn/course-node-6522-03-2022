const express =require('express')
const app = express();

const callback1 = (request,response,next) =>{
    console.log(request.params);
    next();
};


const callback2 = (request,response,next) =>{
    response.send("Pase por la callback 1 y estoy en la callback 2")
}; 

const authorization = (request,response,next) =>{
    request.body;
}

app.get('/',callback1,callback2)

app.listen(4000, ()=>{
	console.log("Servidor corriendo en puerto 4000")
})

