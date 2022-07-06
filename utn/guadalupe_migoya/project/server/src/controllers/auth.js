const { getHashedPassword } = require("../helpers/handleEncrypt")
const { userModel } = require("../models")


const handleLogin = (req, res) => {
    const { email, password } = req.body

    if (!email || !password)
        return res.json({
            error: "Email and password are required"
        })

    if (email != "test@test.com")
        return res.json({
            error: "User not registered"
        })

    if (password != "test")
        return res.json({
            error: "Password incorrect"
        })

    return res.json({
        messsage: "User logged in succesfully",
        body: {
            token: "Tu token"
        }
    })
}




const handleRegister = async (req, res) => {

    try {

        const { name, email, password, avatar, image } = req.body

        if (!name || !email || !password || !avatar || !image)
            return res.json({
                error: "Name, email, password, avatar and image are required"
            })

        const data = req.body

        const plainPassword = data.password

        data.password = await getHashedPassword(plainPassword)
        await userModel.customCreate(data)

        return res.json({
            messsage: "User registered succesfully",
            body: {
                name,
                email,
                password,
                avatar,
                image
            }
        })


    } catch (error) {
        res.status(500)
        res.json({ "error": error })
    }

}

module.exports = {
    handleRegister,
    handleLogin
} 