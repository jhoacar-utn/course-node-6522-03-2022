const userModel = require("../models/mongo/userModel");

const handleAuthLogin = async (req,res,next) =>{

    try{

        const {email, password} = req.body;
    
        const user = await userModel.find({ email: email });

        if(!user){
            res.status(400);
            return res.json({error:"User not registered"});
        }

        
            

    
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({"server_error":error});
    }
}


module.exports.handleAuthLogin = handleAuthLogin;