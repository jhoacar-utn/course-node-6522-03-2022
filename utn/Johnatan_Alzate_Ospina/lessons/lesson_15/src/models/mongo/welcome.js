const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    message: String
});

const Welcome = mongoose.model('welcome', welcomeSchema);

Welcome.getmessage=function(){
    return "mensaje con mysql"
    }

module.exports = Welcome;
