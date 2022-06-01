//Maneja el JWT

const jwt = require('jsonwebtoken');

const {secretKey} = require("../config/config");

const getJSONWebToken = (userData)=>{

    const payload = { //Ver documentacion -> Un payload son los datos importantes, y solo esos datos. El token se genera en base al id, email y name
        id: userData.id,
        email: userData.email,
        name: userData.name,
    };

    return jwt.sign(payload, secretKey); //Secret key sale de una variable de entorno (los .env). Con esta linea devuelvo una promesa que es el token

}

const verifyJSONWebToken = (token) =>{

    return jwt.verify(token, secretKey);// Devuelvo la promesa

}

module.exports = { //Esto es un objeto
    getJSONWebToken,
    verifyJSONWebToken
}

