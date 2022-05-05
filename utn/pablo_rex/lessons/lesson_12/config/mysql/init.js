
const sequelize = require("./connection")

const initConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection with mysql has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = initConnection;