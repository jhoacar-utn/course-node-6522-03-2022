
const {verifyJSONWebToken} = require("../helpers/handleJWT")

const authMiddleware = (req,res,next) => {
    //obtengo el token asignado
    const token = req.session.token;

    if(!token) {
        return res.json({error:"You haven't sent the token"})
    }

    const userData = verifyJSONWebToken(token);

    if (userData) {
        req.user = userData;
        return next()
    } else {
        return res.json({error:"You are not authenticated"})
    }
};

module.exports = {
    authMiddleware
};