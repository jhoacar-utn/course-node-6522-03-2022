
module.exports = {
    connection: process.env.DB_CONNECTION,
    MYSQL:'mysql',
    MONGO:'mongodb',
    mysql: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    mongo: {
        uri: process.env.DB_URI
    }
}