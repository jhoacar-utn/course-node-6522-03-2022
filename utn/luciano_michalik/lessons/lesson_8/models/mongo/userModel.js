const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema); //'User' es el nombre de la base de datos que se crea en Mongo. Esta linea de codigo crea una base de datos de nombre User

console.log("using mongo model");

module.exports = User;
