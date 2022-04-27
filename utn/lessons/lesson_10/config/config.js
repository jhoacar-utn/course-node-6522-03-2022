module.exports = {
    mysql : {

    },
    mongo : {
        MONGO_URI: process.env.MONGO_URI
    },
    secrectKey: process.env.SECRET_KEY || 'my_secret_key',
    saltRounds: parseInt(process.env.SALT_ROUNDS_BCRYPT || 10),
    CONNECTION_DATA : "mongo"

}