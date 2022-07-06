import { CHANGE_DARK_MODE, CHANGE_LOGGED_IN } from "./action";

export function globalReducer(state, action) {

    switch (action.type) {
        case CHANGE_DARK_MODE:
            return {
                ...state,
                isDarksMode: action.payload
            }
        case CHANGE_LOGGED_IN:
            return {
                ...state,
                isloggedIn: action.payload
            }
        default:
            return state
    }
} 