export const CHANGE_NAME= "Change name";
export const CHANGE_EMAIL= "Change email";
export const CHANGE_PASSWORD= "Change password";
export const CHANGE_AVATAR= "Change avatar";
export const CHANGE_IMAGE= "Change image";
export const CHANGE_AVATAR_AND_IMAGE= "Change avatar and image";

export const changeName = (name)=>{
    return {
        type: CHANGE_NAME,
        payload: name
    };
}

export const changeEmail = (email)=>{
    return {
        type: CHANGE_EMAIL,
        payload: email,
    }
}

export const changePassword = (password) => {
    return {
        type: CHANGE_PASSWORD,
        payload: password,
    }
}

export const changeAvatarAndImage = (avatar,image) =>{
    return {
        type: CHANGE_AVATAR_AND_IMAGE,
        payload: {
            avatar,
            image
        }
    }
}