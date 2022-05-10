const express = require("express");
const app = express();
const PORT = 3000

const autorization = (req,res,next) =>{
    req.body;

}


app.get('/:params',(_req,res,_next)=>{
    res.send("Hola mundo")
})


app.listen(PORT,(_req,_res)=>{
    console.log(`Hello World!! in ${PORT}`)
})