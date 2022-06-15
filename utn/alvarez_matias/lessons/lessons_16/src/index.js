require('dotenv').config()
const server = require('./boot/server')
const initdataBase = require('./boot/database')

const PORT = process.env.PORT || 5000

server.listen(PORT , () => {
    console.log(`Servidor corriendo en el puerto${PORT}`)
    initdataBase()
})