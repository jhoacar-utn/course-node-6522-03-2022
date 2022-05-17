import { NextFunction, Request, Response } from "express";


export const getAvatar = function (req: Request, res: Response, next: NextFunction) {

    const avatar = {
        name: "avatarName",
        image: "avatarImage"
    }

    return res.json(avatar);
}

export const postAvatar = function (req: Request, res: Response, next: NextFunction) {

    const message = "Avatar saved";
    return res.send(message);
}


// module.exports = {
//     getAvatar,
//     postAvatar
// }