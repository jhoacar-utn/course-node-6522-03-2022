const fetch = require("node-fetch");



const resolvePromise = parameter =>{
    console.log("Resolved", parameter)

}

const rejetPromise = parameter =>{
    console.log("Reject", parameter)
}

fetch("https://mysql.utn.jhoacar.me").then(resolvePromise).catch(rejectPromise);

