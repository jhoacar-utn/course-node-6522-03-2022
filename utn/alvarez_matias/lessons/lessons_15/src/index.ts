import dotenv from 'dotenv'
dotenv.config()

// require("dotenv").config()

import express  from 'express'
// const express = require("express")

import avatarRoute from './routes/avatar'

const app = express()
app.use(express.json())

app.use('/avatar', avatarRoute)

const PORT =process.env.PORT || 5000



app.listen(PORT, () => {
    console.log("Server corriendo en el puerto" +PORT)
})