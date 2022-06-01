module.exports = {
    mysql : {

    },
    mongo : {
        MONGO_URI: process.env.MONGO_URI //access to MONGO_URI defined in .env
    },
    CONNECTION_DATA : "mongo"
}