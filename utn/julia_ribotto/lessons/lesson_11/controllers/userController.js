//en este archivo se definen lo que van a hacer las rutas
const UserModel = require("../models/mongo/userModel");

const {getHashedPassword} = require("../helpers/handleEncription");

const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{

    try {
        const data = request.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword);
        data.avatar = "user/default.jpg";

        const user = new UserModel(data);

        console.log(data)
        
        await user.save();

        response.json({"user_added": user});
        //response.redirect("/")

    } catch(error) {

        response.status(500);
        response.json({"server_error":error,message:"userControllerError"});

    }

};

const postAvatar = async (request,response,next) => {


    try {
        const avatarPath = request.avatarFile;
        const user = request.user;

        await UserModel.updateOne({email: user.email }, {avatar: avatarPath });

        return response.redirect("/dashboard");
    }
    catch (error) {
        response.status(500);
        response.json({"server_error":error,message:"userControllerError: Avatar update"});
    }

}

module.exports = {
    getAllUsers,
    postUser,
    postAvatar
};