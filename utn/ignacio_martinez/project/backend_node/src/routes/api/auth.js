const express = require("express");

const router = express.Router();

router.post("/login", (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password)
        return res.json({
            error: "Email and password are both required"
        })

    if(email != "test@test.com")
        return res.json({
            error: "User not registered"
        })

    if(password != "test")
        return res.json({
            error: "Incorrect password"
        })

    return res.json({
        messege: "User logged in",
        body: {
            token: "Your token"
        }
    })
});

router.post("/register", (req,res)=> {
    const { name, email, password, avatar, image } = req.body;

    if(!name || !email || !password || !avatar || !image)
    return res.json({
        error: "name, email, password, avatar and image are all required"
    })
    return res.json({
        message: "user registered",
        body:{
            name,
            email,
            avatar,
            image
        }
    })
});

module.exports = router;