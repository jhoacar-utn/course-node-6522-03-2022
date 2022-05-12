
const setCookie = (req,token) => {
    //le coloca el token a la sesion que solicita ingreso
    req.session.token = token;
    return true
};

module.exports = {
    setCookie
}