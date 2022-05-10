const path = require("path");//se instala siempre que se vaya a usar

const {getDb} = require("../config/mongo/conection");

const handleRequest = (request,response,next)=>{
    
    const dbConnect = getDb();
    dbConnect
        .collection("welcome")
        .find({})
        .toArray(function (err, result) {
            if (err) 
                response.status(400).send("Error fetching welcome collection!");
            else 
                response.json(result);
        })
    //Constate de NODE => __dirname
    //response.sendFile(__dirname+"/views/welcome.html");
}

const handlewelcomeWeb = (request,response,next)=>{
    return response.sendFile(path.resolve(__dirname+"/../views/welcome.html"));
}


module.exports.handlewelcome = handleRequest;
module.exports.handlewelcomeWeb = handlewelcomeWeb;

