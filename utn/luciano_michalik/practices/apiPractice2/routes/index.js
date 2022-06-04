const express = require("express")
const fs = require("fs")
const router = express.Router()

const PATH_ROUTES = __dirname //Me devuelve la ruta de mi archivo

const removeExtension = (fileName) => {
    return fileName.split('.').shift()//Quita la extension al archivo.
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{ //Funciona como un for, se repite por cada archivo que haya en routes
    const name = removeExtension(file)

    if(name != "index"){
        router.use(`/${name}`,require(`./${file}`)) //Para el archivo tracks quedaría -> "router.use("/track",require("./tracks.js"))" y así por cada archivo
    }
})

module.exports = router