const express = require("express")

const router = express.Router();

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password)
    return res.json({
      error: "email and passwords are required"
    })

  if (email != 'test@test.com')
    return res.json({
      error: "user not registered"
    })

  if (password != 'test')
    return res.json({
      error: "password incorrect"
    })

  return res.json({
    message: "user logged in succesfully",
    body: {
      token: "tu token"
    }
  })

});

router.post("/register", (req, res) => {

  const { name, email, password, avatar, image } = req.body;

  if (!name || !email || !password || !avatar || !image)
    return res.json({
      error: "name, email, password, avatar and image are required"
    });

  return res.json({
    message: "user registered successfully",
    body: {
      name,
      email,
      avatar,
      image
    }
  });

});


module.exports = router