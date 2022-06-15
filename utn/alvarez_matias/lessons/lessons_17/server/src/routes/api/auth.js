const express = require('express')

const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.json({
            error: "Email and Password are required"
        })
    if (email != 'test@test.com')
        return res.json({
            error: "User not Registered"
        })
    if (password != 'test')
        return res.json({
            error: 'Password incorrect'
        })
    return res.json({
        message: 'User logged in succefully',
        body: {
            token: 'tu token'
        }
    })
})

router.post('/register', (req, res) => {
    const [name, email, password, avatar, image] = req.body

    if (!name || !email || !password || !avatar || !image)
        return res.json({
            error: 'Name, email, password , avatar and image are required'
        })
    return res.json({
        message: 'User registered succefully',
        body: {
            name,
            email,
            avatar,
            image
        }
    })
})

module.exports = router