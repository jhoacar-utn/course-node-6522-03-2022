module.exports = {
    connection: process.env.DB_CONNECTION,
    
    MONGO: 'mongodb',
    mongo: {
        uri: process.env.DB_URI
    }
}