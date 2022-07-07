const { userModel } = require('../models');
const { verifyJSONWebToken } = require("../helpers/handleJWT");

const handleProfile = async (req, res) => {

    try {
        /*
        La variable token no es necesaria que la destructures si ya lo usas con req.query.token
        es decir ya basta con:
            const token = req.query.token;
                        ó
            const { token } = req.query

        Por otro lado, al extraer la variable, debes validar si esta definida, para ello lo haces
        antes de mandarla al verifyJSONWebToken;

            Seria algo asi:

            const { token } = req.query;
            
            if (!token) {
                return res.json({ error: "Token vacio" });
            }

            const userData = verifyJSONWebToken(token);

            if(!userData){
                return res.json({ error: "Token incorrecto" });
            }

        Y garantizas que si no estaba definido pues no va a entrar a la funcion de verifyJSONWebToken

        Por otro lado cuando el jsonwebtoken es verificado devuelve el objeto o null en caso que no fue validado,
        por lo tanto lo que sigue es que antes de 
         */
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