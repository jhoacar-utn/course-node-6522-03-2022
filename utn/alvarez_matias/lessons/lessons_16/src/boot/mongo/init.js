const {connection} = require('../../config/mongo/connection')


const initialization = async () => {
    try{
        await connection()
        console.log('Conexion establecida con Mongo')
    } catch (error){
        console.log(error)
    }
}

module.exports = initialization