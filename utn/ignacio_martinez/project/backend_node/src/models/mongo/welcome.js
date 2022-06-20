const mongoose = require("mongoose");

const welcomeSchema = new mongoose.Schema({
    messege: String
});

const Welcome = mongoose.model("welcome", welcomeSchema);

Welcome.getMessage = function() {
    return "Message with mongo"
};

module.exports = Welcome;