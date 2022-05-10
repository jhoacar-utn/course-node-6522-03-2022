const fetch = require('node-fetch');

const resolvePromise = parameter =>{
    console.log("Resolved",parameter);
}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}

fetch("https://6254af0a19bc53e23481673d.mockapi.io/").then(resolvePromise).catch(rejectPromise);