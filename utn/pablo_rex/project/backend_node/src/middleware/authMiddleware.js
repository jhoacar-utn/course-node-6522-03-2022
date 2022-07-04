const { verifyJSONWebToken } = require("../helpers/handleJWT");

const authMiddleware = (req, res, next) => {

  const token = req.token;
  if (!token)
    return res.json({ error: "Usuario no autenticado" });

  const userData = verifyJSONWebToken(token);

  if (userData) {
    req = userData;
    return next();
  }

  else
    return res.json({ error: "Ud no esta autenticado" });
}

module.exports = {
  authMiddleware
}