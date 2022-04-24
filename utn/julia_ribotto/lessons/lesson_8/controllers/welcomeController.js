const path = require('path');

const {getDb} = require("../config/mongo/connection");

const handleRequest = (request,response,next) => {
    // copied from mongo db
    const dbConnect = getDb();

    dbConnect 
        .collection("welcome")
        .find({})
        .toArray(function (err, result) {
            if (err) {
                response.status(400).send("Error fetching welcome collection!");
            } else {
                response.json(result);
            }
        });        
};

const handleWelcomeWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/welcome.html'));
}

module.exports.handleWelcome = handleRequest;
module.exports.handleWelcomeWeb = handleWelcomeWeb;