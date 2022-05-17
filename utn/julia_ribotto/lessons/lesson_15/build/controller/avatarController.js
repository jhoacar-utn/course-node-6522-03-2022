"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAvatar = exports.getAvatar = void 0;
const getAvatar = function (req, res, next) {
    const avatar = {
        name: "avatarName",
        image: "avatarImage"
    };
    return res.json(avatar);
};
exports.getAvatar = getAvatar;
//Se indica la exportación en el mismo momento que se define la variable
const postAvatar = function (req, res, next) {
    const avatar = req.body;
    if (!avatar.name || !avatar.image) {
        return;
    }
    const message = "Avatar saved";
    return res.send(message);
};
exports.postAvatar = postAvatar;
