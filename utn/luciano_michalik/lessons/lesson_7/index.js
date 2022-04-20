const express = require("express"); //Expres me da la posibilidad del servidor
const app = express();

const {connectToServer,getDb} = require("./config/mongo/connection");

const route_users = require("./routes/userRouter");


const PORT = 5000;

/*https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial*/

const handleRequest = (request,response,next)=>{ //Es lo que se ejecuta al entrar al directorio raiz (/)
    
    const dbConnect = getDb(); //Desde el export de connection tomo el getDB
    dbConnect
        .collection("welcome") //if the "welcome" collection exists...
        .find({}) //And find everything
        .toArray(function (err, result) {
            if (err) 
                response.status(400).send("Error fetching welcome collection!"); //Error obteniendo la DB
            else 
                response.json(result);//Es lo que me devuelve la DB
        })
    //Constate de NODE => __dirname
    //response.sendFile(__dirname+"/views/welcome.html");
}

app.get("/",handleRequest); //El handleRequest 

app.use("/user",route_users);


app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer((error)=>{ 
        if(error)//Si al llamar a connectToServer llega un error como parámetro...
            console.log(error); //Muestro el error
        else
            console.log("Connection established"); //Si no muestro el msj
    });

});