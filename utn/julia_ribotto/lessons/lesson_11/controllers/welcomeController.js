const path = require('path');
const userModel = require('../models/mongo/userModel')

const handleWelcomeWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/welcome.html'));
}

const handleLoginWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/login.html'));
}

const handleRegisterWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/register.html'));
}

const handleDashboardWeb = async (request,response,next) => {
    
    const userData = request.user;
    console.log(userData)
    const emailUser = userData.email;
    
    //actualiza el dashboard
    const user = await userModel.findOne({email: emailUser}).lean().exec();

    const nameUser = user.name;
    const avatarUser = user.avatar;

    return response.render('dashboard',{
        name: nameUser,
        email: emailUser,
        avatar: avatarUser
    });
}

module.exports = {
    handleWelcomeWeb,
    handleLoginWeb,
    handleRegisterWeb,
    handleDashboardWeb
};