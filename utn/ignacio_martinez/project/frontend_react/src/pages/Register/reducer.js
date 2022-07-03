import { CHANGE_AVATAR_AND_IMAGE, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./actions";

export default function reducerFunction(state, action) {

    switch (action.type) {
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_AVATAR_AND_IMAGE:
            return {
                ...state,
                avatar: action.payload.avatar,
                image: action.payload.image
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }

};