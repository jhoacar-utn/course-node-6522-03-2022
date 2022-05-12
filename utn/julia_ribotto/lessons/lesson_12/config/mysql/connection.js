const {Sequelize} = require('sequelize');

const {mysql} = require('../database')

const sequelize = new Sequelize(mysql.user,mysql.database,mysql.password,{
    host:mysql.host,
    port:mysql.port,
    dialect:'mysql'
});

module.exports = sequelize;