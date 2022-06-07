const path = require("path");

const handleWelcomeWeb = (req,res,next)=>{
    return res.sendFile(path.resolve(__dirname+"/.."))
}