



const getAllUsers = (request,response,next)=>{

};

const postUser = (request,response,next)=>{

    const data = request.body;

    const user = UserModel;
    user.save(data);

    response.send("User added");
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
