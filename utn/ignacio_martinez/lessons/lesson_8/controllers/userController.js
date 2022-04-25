const UserModel = require("../models/mongo/userModel");

const getAllUsers = (request,response,next)=>{

};

const postUser = async (request,response,next)=>{

    const data = request.body;

    const user = new UserModel(data);
    
    await user.save();

    response.json({"user_added": data});
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
