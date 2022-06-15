const fetch = require('node-fetch')

const resolvePromise = paramentro => {
    console.log("Resolved",paramentro)
}

const rejectPromise = parametro => {
    console.log("Reject",parametro)
}

fetch('https://youtube.com').then(resolvePromise).catch(rejectPromise)