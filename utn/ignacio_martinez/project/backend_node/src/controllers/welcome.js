const {welcome} = require("../models");

// const path = require("path");

const handleWelcome = (req,res,next)=>{
//    return res.sendFile(path.resolve(__dirname+"/.."))

const message = welcome.getMessage();
res.send(message);
};

module.exports = {
    handleWelcome
};