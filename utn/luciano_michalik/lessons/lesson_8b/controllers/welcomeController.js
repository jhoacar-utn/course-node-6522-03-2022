/*La info metida en handleRequest sale de... https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial*/

const {getDB} = require("../config/mongo/connection")
const handleRequest = (request,response,next)=>{ //Es lo que se ejecuta al entrar al directorio raiz (/)
    
    const dbConnect = getDb(); //Desde el export de connection tomo el getDB
    dbConnect
        .collection("welcome") //if the "welcome" collection exists...
        .find({}) //And find everything. Es como el WHERE en SQL cuando ponias "SELECT * FROM ... WHERE id=xx"
        .toArray((err, result) => { //Si encuentro algo, lo transformo a Array (el Array SIEMPRE al ULTIMO)
            if (err) 
                response.status(400).send("Error fetching welcome collection!"); //Error obteniendo la DB
            else 
                response.json(result);//Es lo que me devuelve la DB
        })
    //Constate de NODE => __dirname
    //response.sendFile(__dirname+"/views/welcome.html");
}

module.exports.handleWelcome = handleRequest;