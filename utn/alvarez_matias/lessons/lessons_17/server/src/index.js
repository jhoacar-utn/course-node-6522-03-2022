require("dotenv").config()
const server = require("./boot/server")

const port = process.env.PORT || 4000;


server.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})