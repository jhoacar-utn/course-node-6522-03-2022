const { request } = require("express");
const { verifyJSONWebToken } = require("../helpers/handleJWT");


const authMiddleware = (req, res, next) =>{

    const token = request.session.token

    const userData = verifyJSONWebToken(token);

    if(userData)
        return next();
    else
        return res.json({error:"Ud no esta autenticado"});

}


module.exports = {
    authMiddleware
}