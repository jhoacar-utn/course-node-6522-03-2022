

const getAllUsers = (request,response,next)=>{

};

const postUser = (request,response,next)=>{

    
    response.send("User added");
}

module.exports.getAllUsers = getAllUsers;
module.exports.postUser = postUser;
