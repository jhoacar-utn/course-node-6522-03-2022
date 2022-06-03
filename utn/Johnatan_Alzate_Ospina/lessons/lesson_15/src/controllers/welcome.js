const {welcome}=require("../models")

const handlewelcome=(req,res)=>{
    const message=welcome.getmessage()
    res.send(message)
}
module.exports={
    handlewelcome
 }