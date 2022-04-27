const jwt = require('jsonwebtoken');


const getJSONWebToken = async (userData)=>{

    const payload = {
        id: userData.id,
        email: userData.email
    };
    const secretKey = process.env.SECRET_KEY || 'my_secret_key';


    return jwt.sign(payload, secretKey);

}