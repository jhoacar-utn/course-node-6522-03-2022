const { getHashedPassword } = require("../helpers/handleEncrypt");
const { getJSONWebToken } = require("../helpers/handleJWT");
const { userModel } = require("../models");
const { isTheSameHash } = require("../helpers/handleEncrypt");

const handleLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password)
      return res.json({
        error: "email and passwords are required"
      })

    const user = await userModel.customFind({ email: email });

    if (!user) {
      res.status(400);
      return res.json({ error: "User not registered" });
    }

    const isAuthorized = await isTheSameHash(password, user.password);

    if (!isAuthorized) {
      res.status(400);
      return res.json({ error: "User not authorized" });
    }
    const token = getJSONWebToken(user);
    res.status(201);
    

    return res.json({
      message: "user loggedin successfully",
      body: {
              token
      }
    });

  } catch (error) {

    console.log(error);
    res.status(500);
    res.json({ "error": error, message:"Auth Error" });
  }

}

const handleRegister = async (req, res) => {

  try {

    const { name, email, password, avatar, image } = req.body;

    if (!name || !email || !password || !avatar || !image)
      return res.json({
        error: "name, email, password, avatar and image are required"
      });

    const data = req.body;

    const plainPassword = data.password;

    data.password = await getHashedPassword(plainPassword);

    await userModel.customCreate(data);
    res.status(201);

    
    return res.json({
      message: "User registered successfully",
      body: {
        name,
        email,
        avatar,
        image
      }
    });


  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ "error": "Error!! user registered" });
  }
}


module.exports = {
  handleRegister,
  handleLogin,

}