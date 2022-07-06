import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_AVATAR_AND_IMAGE } from './actions'



export default function reducerFunction(state, action) {


    switch (action.type) {

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

        default:
            return state
    }
}