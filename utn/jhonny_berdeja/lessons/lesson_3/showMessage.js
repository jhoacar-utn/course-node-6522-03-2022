require('dotenv').config();
const { QueryTypes } = require('sequelize');
const { sequelize } = require("./connection");

const get_message = async function () {
    try {
        const welcome_message = await sequelize.query("SELECT * FROM `welcome`", { type: QueryTypes.SELECT });
        console.log(welcome_message);
    } catch (error) {
        console.log(error);
    }
}

get_message();