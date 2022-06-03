import { NextFunction, Request, Response } from "express";

interface Avatar{
    name:string,
    image:string
}

export const getAvatar = function (req:Request, res:Response, next: NextFunction){

    const avatar: Avatar = {
        name: "avatarName",
        image: "avatarImage"
    }

    return res.json(avatar)
}

export const postAvatar = function (req:Request, res:Response, next: NextFunction){

    const avatar: Avatar = req.body;

    if(!avatar.name || !avatar.image)
    return;
    
    const messege = "Avatar seved";
    return res.send(messege);
}


//module.exports {
//    getAvatar,
//    postAvatar
//}