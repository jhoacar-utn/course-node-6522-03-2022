"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAvatar = exports.getAvatar = void 0;
const getAvatar = function (req, res, next) {
    const avatar = {
        name: "avatarname",
        image: "avatarImage"
    };
    return res.json(avatar);
};
exports.getAvatar = getAvatar;
const postAvatar = function (req, res, next) {
    const message = "avatar saved";
    const avatar = req.body; //va a ser la informacion que me envie el usuario   
    if (avatar.name || !avatar.image)
        return;
    return res.send(message);
};
exports.postAvatar = postAvatar;
/*
module.exports={
    getAvatar,
    postAvatar
}*/ 
