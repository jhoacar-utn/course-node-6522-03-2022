const jwt = require('jsonwebtoken');
require("dotenv").config();


const secretKey = process.env.SECRET_KEY || 'my_secret_key';

const getJSONWebToken = (userData)=>{

    return jwt.sign(userData, secretKey);

}

const verifyJSONWebToken = (token) =>{

    return jwt.verify(token, secretKey);

}

module.exports = {
    getJSONWebToken,
    verifyJSONWebToken
}

