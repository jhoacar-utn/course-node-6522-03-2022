const {connection} = require('../../config/mysql/connection')


const initialization = async () => {
    try{
        await connection()
        console.log('Conexion establecida con Mysql')
    } catch (error){
        console.log(error)
    }
}

module.exports = initialization