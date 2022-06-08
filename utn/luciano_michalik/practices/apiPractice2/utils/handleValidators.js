const {validationResult} = require("express-validator")

const validateResult = (req,res,next) =>{
    try{
        validationResult(req).throw(); //El método throw() verifica todo
        return next() //Si está OK Continua hacia el controlador
    }catch(err){
        res.status(403)
        res.send({errors:err.array()})
    }
}

module.exports = validateResult