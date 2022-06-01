//Lo primero es instalar mongo con "npm i mongodb"
// Todo este código sale de la web de Mongo https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

const { MongoClient } = require("mongodb"); //Codigo copiado de la documentacion de Mongo

const {mongo} = require("../config"); //Al poner entre llaves hagi un destructure para traer solo el objeto "mongo"

const connectionString = mongo.MONGO_URI;//DB LINK

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {

  connectToServer: function (callback) {
    
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("luciano_michalik"); //Nombre de mi DB en mongo
      
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  
    },

  getDb: function () {
    return dbConnection;  
  },
};