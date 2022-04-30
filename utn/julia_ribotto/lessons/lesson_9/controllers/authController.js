const userModel = require("../models/mongo/userModel");

const {isTheSameHash} = require("../helpers/handleEncription");

const handleAuthLogin = async (req,res,next) => {
    
    try{
        const {email,password} = req.body;

        const user = await userModel.find({email: email});
 
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

        return res.json({user:user,message:"you have logged in"});

    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({"server_error":error});
    }
    


};

module.exports.handleAuthLogin = handleAuthLogin;