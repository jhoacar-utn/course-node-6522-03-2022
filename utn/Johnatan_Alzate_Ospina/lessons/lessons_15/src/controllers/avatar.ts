import { NextFunction,Request,Response } from "express"
interface Avatar{
    name:string,
    image:string
}
export const getAvatar=function(req:Request,res:Response,next:NextFunction){
   const avatar:Avatar={
       name:"avatarname",
       image:"avatarImage"
   }

   return res.json(avatar)
}
export const postAvatar=function(req:Request,res:Response,next:NextFunction){
    const message="avatar saved"
    const avatar:Avatar = req.body//va a ser la informacion que me envie el usuario   
    if (avatar.name || !avatar.image)
    return;

    return res.send(message)
 }

 /*
 module.exports={
     getAvatar,
     postAvatar
 }*/