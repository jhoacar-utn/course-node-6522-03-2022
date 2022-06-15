const express = require("express")
const authRouter = require('./auth')
const router = express.Router()

router.use('/auth', authRouter)

router.get("/", (req, res) => {
    console.log(req.query)
    return res.send("Estoy en la Api")
})


module.exports = router
