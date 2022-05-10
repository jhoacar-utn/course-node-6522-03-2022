const {verifyJSONWebToken}=require("../helpers/handleJWT")
const autMiddleware=(req,res,next)=>{
    const token=req.session.token

    const userData=verifyJSONWebToken(token)

    if(userData){
        req.user=userData
       return next() 
    }
    
    else
    res.json({error:"usted no esta autenticado"} )

}
module.exports={
    autMiddleware
}