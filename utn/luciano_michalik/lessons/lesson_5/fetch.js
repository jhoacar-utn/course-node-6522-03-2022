//Antes de escribir código se instaló fetch con npm install node-fetch@2

const fetch = require("node-fetch") //Requiero el comando de fetch para poder trabajar con el

const resolvePromise = parameter => {
    console.log("RESOLVE:",parameter)
}

const rejectPromise = parameter => {
    console.log("REJECT:",parameter)

}

fetch("https://youtube.com").then(resolvePromise).catch(rejectPromise)//Promesas
