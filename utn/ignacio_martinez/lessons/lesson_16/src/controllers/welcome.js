const {welcome} = require("../models");

const handleWelcome = (req,res)=>{

    const messege = welcome.getMessege();
    res.send(messege);
};

module.exports = {handleWelcome};