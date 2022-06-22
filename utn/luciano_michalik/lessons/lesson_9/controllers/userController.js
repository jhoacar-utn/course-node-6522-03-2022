const UserModel = require("../models/mongo/userModel");

const {getHashedPassword} = require("../helpers/handleEncrypt");

const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{ //Por request llegan los datos del post. Por response van las respuestas.

    try{

        const data = request.body;

        const plainPassword = data.password;

        data.password = await getHashedPassword(plainPassword); //Recordar que la función es asincrona

        const user = new UserModel(data);
        
        await user.save();

        response.json({"user_added": user});


    }catch(error){
        response.status(500); //El error 500 es un error de servidor
        response.json({"server_error":error});
    }
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
