const {getDb} = require("../config/mongo/connection");

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

module.exports.handleWelcome = handleRequest;