const { getHashedPassword } = require("../helpers/handleEncrypt");
const { userModel } = require("../models");
const {isTheSameHash} = require("../helpers/handleEncrypt");
const {getJSONWebToken} = require("../helpers/handleJWT");



const handleLogin = async (req,res)=>{
    try {

        const {email, password} = req.body;

        const user = await userModel.customFind({ email: email });

        if(!user){
            res.status(400);
            return res.json({error:"User not registered"});
        }

        const isAuthorized = await isTheSameHash(password,user.password);

        if(!isAuthorized){
            res.status(401);
            return res.json({error:"User not authorized"});
        }

        const token = getJSONWebToken(user);

        return res.json({
            message: "Todo ok",
            body: {
                token: token
            },
        })

    }catch(error){
        
        console.log(error);
        res.status(500);
        return res.json({"server_error":error});
    }
}

const handleRegister = async (req,res)=> {

    try {

        console.log(req.body)
        const { name, email, password, avatar, image } = req.body;

        if(!name || !email || !password || !avatar || !image)
            return res.json({
                error: "name, email, password, avatar and image are all required"
            });


        const plainPassword = password;

        const user = {...req.body}

        user.password = await getHashedPassword(plainPassword);

        await userModel.customCreate(user);

        return res.json({
            message: "user registered",
            body:{
                name,
                email,
                avatar,
                image
            }
        })

    } catch (error) {
        res.status(500);
        res.json({ "error": error });
        console.log(error)
    }

}

module.exports = {
    handleRegister,
    handleLogin
}