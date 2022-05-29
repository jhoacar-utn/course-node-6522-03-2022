//configurador de conexión

const { Sequelize } = require('sequelize');
const {uri} = require('../database');

if(!uri) {
    throw `Must specify connection DB_URI as an environment variable`;
}

const sequelize = new Sequelize(uri);

const connection = async () => {
    await sequelize.authenticate();
};

module.exports = {
    connection,
    sequelize
};