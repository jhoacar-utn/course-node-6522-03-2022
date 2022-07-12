const { getHashedPassword } = require("../helpers/handleEncrypt");
const { getJSONWebToken } = require("../helpers/handleJWT");
const { userModel } = require("../models");
const { isTheSameHash } = require("../helpers/handleEncrypt");



const handleLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password)
            return res.json({
                error: "email and passwords are required"
            })

        const user = await userModel.customFind({ email: email });

        if (!user) {
            res.status(400);
            return res.json({ error: "User not registered" });
        }

        const isAuthorized = await isTheSameHash(password, user.password);

        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "User not authorized" });
        }
        const token = getJSONWebToken(user);

        return res.json({
            message: "Todo Ok",
            body: {
                token
            }
        });

    } catch (error) {

        console.log(error);
        res.status(500);
        res.json({ "error": error });
    }

}

const handleRegister = async (req, res) => {

    try {

        const { name, email, password, avatar, image } = req.body;

        if (!name || !email || !password || !avatar || !image)
            return res.json({
                error: "name, email, password, avatar and image are required"
            });

        const data = req.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);

        await userModel.customCreate(data);
        return res.json({
            message: "user registered successfully",
            body: {
                name,
                email,
                avatar,
                image
            }
        });


    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ "error": error });
    }
}




const handleGetDashboard = async (req, res) => {
    try {

        const { email } = req.body;

        const user = await userModel.customFindOne({ email: email });

        if (!user) {
            res.status(400);
            return res.json({ error: "Profile not found" });
        }
        return res.json(
            [{
                email: user.email,
                name: user.name,
                avatar: user.avatar,
                image: user.image
            }]
        );

    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {
    handleRegister,
    handleLogin,
    handleGetDashboard,
}