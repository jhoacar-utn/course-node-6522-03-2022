const { DataTypes } = require("sequelize");
const {sequelize} = require("../../config/mysql/connection");

const welcomeSchema = {
    message: DataTypes.STRING
};

const Welcome = sequelize.define("welcome", welcomeSchema, {
    tableName: "welcome"
});

Welcome.getMessage = function() {
    return "Message with mysql"
};

module.exports = Welcome;
