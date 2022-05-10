const express = require('express')
const animalRouter = require("./routes/Animal")
const app = express()

//htpp:localhost:8000/zoo/animals
app.use("/forest/", animalRouter)

app.use("/", express.static(__dirname))//le damos acceso a express a todo el directorio para que ingrese en cualquier archivo

app.get("/", (req, res) => {
    return res.json({ mensage: "Welcome" })
})
app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})