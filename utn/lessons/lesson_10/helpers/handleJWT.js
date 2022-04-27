const jwt = require('jsonwebtoken');

const {secretKey} = require("../config/config");

const getJSONWebToken = async (userData)=>{

    const payload = {
        id: userData.id,
        email: userData.email
    };

    return jwt.sign(payload, secretKey);

}

