const express = require('express');

const router = express.Router();

router.post("/login", (req,res)=>{
    //controlador que corresponde a otro archivo
    const {email,password} = req.body;

    if(!email || !password) {
        return res.json({
            error: "email and password required"
        })
    }

    if(email!='test@test.com') {
        return res.json({
            error: "user not registered"
        })
    }

    if(password!='test') {
        return res.json({
            error: "incorrect password"
        })
    }

    return res.json({
        message: "user logged in",
        body: {
            token:"your token"
        }
    })

});

router.post("/register", (req,res)=>{
    const {name, email, password, avatar, image} = req.body;

    if (!name || !email || !password || !avatar || !image) {
        return res.json({
            error: "name, email, password, avatar and image are required"
        })
    }

    return res.json({
        message: "user registered",
        body:{
            name,
            email,
            avatar,
            image
        }
    });
});



module.exports=router;