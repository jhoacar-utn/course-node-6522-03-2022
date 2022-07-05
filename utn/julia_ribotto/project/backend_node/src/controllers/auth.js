const { userModel } = require("../models");
const { getHashedPassword, isTheSameHash } = require("../helpers/handleEncrypt");
const { getJSONWebToken } = require("../helpers/handleJWT");


const handleRegister = async (req, res) => {

    try {

        const { name, email, password, avatar, image } = req.body;

        if (!name || !email || !password || !avatar || !image) {
            return res.json({
                error: "name, email, password, avatar and image are required"
            })
        };

        const data = req.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);

        await userModel.customCreate(data);

        res.status(201);
        
        return res.json({
            message: "Creado Satisfactoriamente",
            body: {
                name,
                email,
                avatar,
                image
            }
        });

    } catch (error) {
        //console.log(error)
        res.status(500);
        res.json({ error: "This user has already been registered" });

    }
};

const handleLogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await userModel.customFind({ email: email });

        if (!user) {
            //bad request
            res.status(400);
            return res.json({ error: "Usuario no registrado" });
        };

        const isAuthorized = await isTheSameHash(password, user.password);

        if (!isAuthorized) {
            res.status(400);
            return res.json({ error: "Credenciales incorrectas" });
        }

        const token = getJSONWebToken(user);
        
        //setCookie(req, token);

        res.status(201);

        return res.json({
            message: "Logueado Satisfactoriamente",
            //al loguearse me devuelve un objeto como el token para poder compararlo con el token que setee como cookie
            body: {
                token,
            }
        });

    } catch (error) {
        //console.log(error);
        res.status(500);
        return res.json({ error:"server_error", message: "authControllerError" });
    }
};


module.exports = { handleRegister, handleLogin };