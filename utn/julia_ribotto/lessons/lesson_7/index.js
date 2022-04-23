const express = require('express');
const app = express();

const route_user = require("./routes/userRouter") //declaro que voy a usar esta ruta

const PORT = 4000;

const handleRequest = (request,response,next) => {
    //response.send('Welcome to my app');

    response.sendFile(__dirname+"/views/index.html")
}

app.get("/",handleRequest);

app.use("/user",route_user); //uso la ruta creada

app.listen(PORT,()=>{
    console.log('Server on port '+PORT);
});

