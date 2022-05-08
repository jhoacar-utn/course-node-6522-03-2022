const userModel = require("../models/mongo/userModel");
const {isTheSameHash} = require("../helpers/handleEncription");
const {getJSONWebToken} = require("../helpers/handleJWT");
const {setCookie} = require("../helpers/handleCookie");


const handleAuthLogin = async (req,res,next) => {
    
    try{
        const {email,password} = req.body;

        const user = await userModel.findOne({email: email}).exec();
 
        console.log(user);

        if(!user) {
            //bad request
            res.status(400);
            return res.json({error:"user not registered"});
        };

        const isAuthorized = await isTheSameHash(password,user.password);

        if(!isAuthorized) {
            res.status(401);
            return res.json({error:"user not authorized"});
        }

        const token = await getJSONWebToken(user);

        setCookie(req,token);

        return res.redirect("/dashboard");

    }catch(error){ 
        console.log(error);
        res.status(500);
        return res.json({"server_error":error,message:"authControllerError"});
    }
    


};

module.exports.handleAuthLogin = handleAuthLogin;