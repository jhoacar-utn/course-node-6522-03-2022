const { userModel } = require('../models');
const { verifyJSONWebToken } = require("../helpers/handleJWT");

const handleProfile = async (req, res) => {

    try {       
        const { token } = req.query; 

        const userData = verifyJSONWebToken(token);

        if (!token) {
            return res.json({ error: "incorrect token" });
        }

        const { email } = userData;

        const user = await userModel.customFind({ email: email });

        return res.json({
            message:"User information",
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

  
};

module.exports = { handleProfile };