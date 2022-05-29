//inicializador de conexión

const {connection} = require('../../config/mysql/connection');

const initialization = async () => {
    try {
        await connection();
        console.log('Connection established -> mysql'); 
    } catch (error) {
        //Tomaría el error, por ejemplo, del throw de la URI
        console.log(error);
    }

};

module.exports = initialization;