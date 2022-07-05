
export const CHANGE_NAME = "cambiar el nombre";
export const CHANGE_EMAIL = "cambiar mail";
export const CHANGE_PASSWORD = "cambiar contraseña";
export const CHANGE_AVATAR = "cambiar el avatar";
export const CHANGE_IMAGE = "cambiar la imagen";
export const CHANGE_AVATAR_AND_IMAGE = "change avatar and image";

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
};

export const changeEmail = (email) => {
    return {
        type: CHANGE_EMAIL,
        payload: email
    }
};

export const changePassword = (password) => {
    return {
        type: CHANGE_PASSWORD,
        payload: password
    }
};

export const changeAvatarAndImage= (avatar, image) => {
    return {
        type: CHANGE_AVATAR_AND_IMAGE,
        payload: {
            avatar,
            image
        }
    }
};