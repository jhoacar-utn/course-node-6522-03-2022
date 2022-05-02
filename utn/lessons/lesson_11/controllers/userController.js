const UserModel = require("../models/mongo/userModel");

const {getHashedPassword} = require("../helpers/handleEncrypt");

const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{

    try{

        const data = request.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);
        data.avatar = "/users/default.png";

        const user = new UserModel(data);
        
        await user.save();

        response.json({"user_added": user});


    }catch(error){
        response.status(500);
        response.json({"server_error":error});
    }
}

const postAvatar = async (request,response,next)=>{

    return response.send("Imagen actualizada");
}


module.exports = {
    getAllUsers,
    postUser,
    postAvatar
}
