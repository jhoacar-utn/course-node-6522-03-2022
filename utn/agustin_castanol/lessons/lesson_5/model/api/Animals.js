import fetch from 'node-fetch'
import {URL_API} from "../../api-config"
const animals=[]
const getAll =()=>{
    
    fetch(URL_API+"/animals")
    .then(param =>param.json())
    .then(resolvePromise)
    .catch(rejectPromise)
    return animals
}

const resolvePromise = param => {
    animals = param;
}
const rejectPromise = param => {
   console.log("Error")

}
export const animal = {
    getAll
}