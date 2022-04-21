const UserModel = require("../models/mongo/userModel");

const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{

    const data = request.body;

    const user = new UserModel(data);
    
    await user.save();

    response.send("User added", user);
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
