module.exports = {
    mysql:{
        process.env.DB_DATABASE
        process.env.DB_USER
        process.env.DB_PASSWORD
        process.env.DB_HOST
        process.env.DB_PORT
        ,
        mongo:{
            uri: process.env.MONGO_URI
        }
    }
}