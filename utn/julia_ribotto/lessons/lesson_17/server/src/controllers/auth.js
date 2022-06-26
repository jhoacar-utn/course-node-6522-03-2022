const { getHashedPassword } = require("../helpers/handleEncription");
const { userModel } = require("../models");


const handleRegister = async (req,res)=>{
    
    try {

        const {name, email, password, avatar, image} = req.body;

        if (!name || !email || !password || !avatar || !image) {
            return res.json({
                error: "name, email, password, avatar and image are required"
            })
        };

        const data = req.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);

        await userModel.customCreate(data);

        return res.json({
            message: "user registered",  
            body:{
                name,
                email,
                avatar,
                image
            }
        });

    } catch(error) {
        console.log(error)
        res.status(500);
        res.json({"error":error});

    }


};

const handleLogin = (req,res)=>{
    //controlador que corresponde a otro archivo
    const {email,password} = req.body;

    if(!email || !password) {
        return res.json({
            error: "email and password required"
        })
    }

    if(email!='test@test.com') {
        return res.json({
            error: "user not registered"
        })
    }

    if(password!='test') {
        return res.json({
            error: "incorrect password"
        })
    }

    return res.json({
        message: "user logged in",
        body: {
            token:"your token"
        }
    })

};


module.exports = {handleRegister, handleLogin};