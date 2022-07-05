const { userModel } = require('../models');
const { verifyJSONWebToken } = require("../helpers/handleJWT");

const handleProfile = async (req, res) => {

    try {
        const { token } = req.query.token;

        const userData = verifyJSONWebToken(token);

        if (!token) {
            return res.json({ error: "Token incorrecto" });
        }

        const { email } = userData;

        const user = await userModel.customFind({ email: email });

        return res.json({
            message:"Perfil del usuario con toda su información",
            body: {
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                image: user.image
            }
        })


    } catch (error) {
        return res.json({ "error": error })
    }

    /*
        const token = req.session.token;
    
        verifyJSONWebToken(token);
    
        console.log(user);
    
        if (!token) {
            return res.json({error:"Token incorrecto"})
        }
    
        req.user = userData;
    
        console.log(userData)
        
        return res.json({
            message:"Perfil del usuario con toda su información",
            body: {
                name,
                email,
                avatar,
                image
            }
        });*/
};

module.exports = { handleProfile };