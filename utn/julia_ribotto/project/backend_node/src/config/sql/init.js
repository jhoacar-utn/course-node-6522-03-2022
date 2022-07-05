const sequelize = require('./connection');
require("../../models");

const initConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("connection with sql established");
        
        await sequelize.sync();
        console.log("all models were synchronized successfully");

    } catch (error) {
        console.error("unable to connect to the database:", error);
    }
};

module.exports = initConnection;