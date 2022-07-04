const getAllUsers = async (req,res,next)=> {

try {
    const data = request.body;

    const plainPassword = data.password;

    data.password = await getHashedPassword(plainPassword);
    data.avatar = "/users/default.png";

    const user = await userModel.create(data);

    response.json({ "user_added": user });


} catch (error) {
    response.status(500);
    response.json({ "server_error": error });
}
};

const postUser = (req,res,next)=> {

};

const getUser = (req,res,next)=> {

};

module.exports = {getAllUsers, postUser};