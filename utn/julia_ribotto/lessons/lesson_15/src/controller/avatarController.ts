import { NextFunction, Request, Response } from "express";

interface Avatar {
    name:String,
    image:String
}

export const getAvatar = function (req:Request, res:Response, next:NextFunction) {
    const avatar:Avatar = {
        name: "avatarName",
        image: "avatarImage"
    }

    return res.json(avatar)
}

//Se indica la exportación en el mismo momento que se define la variable
export const postAvatar = function (req:Request,res:Response,next:NextFunction) {
    const avatar:Avatar = req.body;

    if (!avatar.name || !avatar.image) {
        return
    }

    const message = "Avatar saved";

    return res.send(message)
}
