const UserModel = require("../models/mongo/userModel");
const getHashedPassword = require("../helpers/handleEncrypt");
const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{

    const data = request.body;

    const plainPassword = data.password;

    data.password = await getHashedPassword(plainPassword);

    const user = new UserModel(data);
    
    await user.save();

    response.json({"user_added": user});
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;