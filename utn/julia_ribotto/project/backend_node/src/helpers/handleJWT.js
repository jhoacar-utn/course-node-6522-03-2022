const jwt = require('jsonwebtoken');
const { secretKey } = require("../config/config");

//función que se encarga de generar el token de identificación
const getJSONWebToken = (userData) => {

    //devuelve promesa
    return jwt.sign(userData, secretKey)
};

const verifyJSONWebToken = (token) => {
    return jwt.verify(token, secretKey);
}

module.exports = {
    getJSONWebToken,
    verifyJSONWebToken
}