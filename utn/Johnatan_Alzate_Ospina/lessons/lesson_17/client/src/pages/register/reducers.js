import { CHANGE_AVATAR, CHANGE_AVATAR_AND_IMAGEN, CHANGE_EMAIL, CHANGE_IMAGEN, CHANGE_NAME, CHANGE_PASSWORD } from '../register/actions'
/* las funciones reductoras tienen los siguientes requisitos:
-siempre debe devolver el estado ("state").
-tiene que ser una funcion pura(los valores de entrada no son alterados(parametros) en la funcion)*/
export default function reducerFunction(state, action) {
    console.log(state)
    console.log(action)

    switch (action.type) {
        case CHANGE_NAME:
            return{
                ...state,
                name:action.payload
            }
        case CHANGE_EMAIL:
            return{
                ...state,
                email:action.payload.email
            }
        case CHANGE_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
        case CHANGE_AVATAR:
            break;
        case CHANGE_IMAGEN:
            break;
        case CHANGE_AVATAR_AND_IMAGEN:
            return{
                ...state,
                avatar:action.payload.avatar,
                image:action.payload.image

            
            }
            
        default:
            return state
    }
    return state
} 