const sequelize = require('./connection')


const initConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("connection with mysql established");
        
        await sequelize.sync();
        console.log("all models were synchronized successfully");
    } catch {
        console.error("unable to connect to the database:",error);
    }
};

module.exports = initConnection;