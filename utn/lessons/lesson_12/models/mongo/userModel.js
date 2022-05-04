const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String
});

console.log("Using Moongose");

const User = mongoose.model('User', userSchema);

module.exports = User;
