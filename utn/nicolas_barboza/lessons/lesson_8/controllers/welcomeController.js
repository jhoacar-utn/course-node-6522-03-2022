const {getDb}= require("../config/mongo/connections")

const handleRequest = (request,response,next)=>{
    const dbConnect = getDb();
        dbConnect
        .collection("welcome")
        .find({})
        .limit(50)
        .toArray(function (err, result) {
          if (err) {
            response.status(400).send("Error fetching welcome collection");
         } else {
            response.json(result);
          }
        });
    }


    
module.exports.handleWelcome = handleRequest