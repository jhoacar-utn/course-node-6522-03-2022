const express = require('express')
const router = express.Router()
const handleWelcome = require ('../../controllers/welcome')

router.get('/',handleWelcome)

module.exports = router