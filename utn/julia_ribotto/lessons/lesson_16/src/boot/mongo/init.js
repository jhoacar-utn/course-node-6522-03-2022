
const {connection} = require('../../config/mongo/connection');

const initialization = async () => {
    try {
        await connection();
        console.log('Connection established -> mongoDB'); 
    } catch (error) {
        console.log(error)
    }
};

module.exports = initialization;