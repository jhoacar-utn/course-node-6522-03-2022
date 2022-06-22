//El index SOLO debería ser el inicializador del servidor, pero no debería manejar NADA más, el resto se mete en las carpetas.

const express = require("express"); //Expres me da la posibilidad del servidor
const app = express();

const {connectToServer} = require("./config/mongo/connection");

const PORT = 5000;

app.listen(PORT,()=>{
    
    console.log("Server on port "+PORT);

    connectToServer((error)=>{ 
        if(error)//Si al llamar a connectToServer llega un error como parámetro...
            console.log(error); //Muestro el error
        else
            console.log("Connection established"); //Si no muestro el msj
    });

});