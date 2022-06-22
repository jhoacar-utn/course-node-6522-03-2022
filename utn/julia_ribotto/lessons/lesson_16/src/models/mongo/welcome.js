const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    message: String
});

const Welcome = mongoose.model('welcome',welcomeSchema);

//Método asincrono que trae el mensaje de la base de datos
Welcome.getMessage = function(){
    return "Mongo Message"
}

module.exports = Welcome;