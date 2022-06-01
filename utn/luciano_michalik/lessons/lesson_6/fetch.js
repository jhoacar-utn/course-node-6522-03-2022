//Antes de escribir código se instaló fetch con npm install node-fetch@2
//Este archivo lo unico que hace es mostrar un ejemplo de cómo funciona un fetch

const fetch = require("node-fetch") //Requiero el comando de fetch para poder trabajar con el

const resolvePromise = parameter => { //Callback del .then
    console.log("RESOLVED:",parameter)
}

const rejectPromise = parameter => { //Callback del .catch
    console.log("REJECTED:",parameter)

}

fetch("https://youtube.com").then(resolvePromise).catch(rejectPromise)//Esta petición devuelve una promesa. Si esa promesa es aprobada se ejecutará el ".then" y el callback "resolvePromise", si es rechazada o falla se ejecuta el ".catch" y el callback "rejectPromise"
