const path = require('path');


const handleWelcomeWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/welcome.html'));
}

const handleLoginWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/login.html'));
}

const handleRegisterWeb = (request,response,next) => {
    return response.sendFile(path.resolve(__dirname+'/../views/register.html'));
}

const handleDashboardWeb = (request,response,next) => {
    
    const userData = request.user;
    const nameUser = userData.name;
    const emailUser = userData.email;

    return response.render('dashboard',{
        name: nameUser,
        email: emailUser
    });
}

module.exports = {
    handleWelcomeWeb,
    handleLoginWeb,
    handleRegisterWeb,
    handleDashboardWeb
};