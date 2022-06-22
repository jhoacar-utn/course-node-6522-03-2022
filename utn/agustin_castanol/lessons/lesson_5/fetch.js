const fetch = require('node-fetch')
const resolvePromise = param => {
    console.log("promesa realizada")
    console.log(param)
}
const rejectPromise = param => {
    console.error("promesa rechazada")
    console.log(param)

}
fetch("https://youtube.com").then(resolvePromise).catch(rejectPromise)