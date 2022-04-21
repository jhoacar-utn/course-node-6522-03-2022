const getAllUsers = (req,res,next)=>{

};

const postUser= (req,res,next)=>{
    const data = req.body;
    const user = UserModel;
    user.sve(data);
    res.send("user added");
};

module.exports.getAllUsers = exports;
module.exports.postUser = exports;