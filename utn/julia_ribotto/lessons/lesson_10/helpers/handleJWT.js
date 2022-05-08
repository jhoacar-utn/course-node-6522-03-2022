const jwt = require('jsonwebtoken');
const {secretKey} = require("../config/config")

//función que se encarga de generar el token de identificación
const getJSONWebToken = (userData) => {

    const payload = {
        id: userData.id,
        email: userData.email,
        name: userData.name
    };

    //devuelve promesa
    return jwt.sign(payload, secretKey)
};

const verifyJSONWebToken = (token) => {
    return jwt.verify(token, secretKey);
}

module.exports = {
    getJSONWebToken,
    verifyJSONWebToken
}