const express = require("express")
const app = express()
const PORT = 300

const callback1 = (req, res, next) => {
    console.log(req.params)

    next()
}

const callback2 = (req,res,next) => {
   res.sendFile(__dirname+'/login.html')
}

const callback3 = (req,res,next) => {
    res.sendFile(__dirname+'/dashboard.html')
}

const authorization = (req,res,next) => {
    req.body
    console.log(req.body)
    next()
}

app.get('/:parametro', callback1,callback2)
app.post('/',authorization, callback3)

app.listen(PORT, () => {
    console.log("Corriendo en el puerto" ,PORT)
})