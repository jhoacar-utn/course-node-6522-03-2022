// const { MongoClient } = require("mongodb");

// const {mongo} = require("../config");

// const connectionString = mongo.MONGO_URI;
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let dbConnection;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (err || !db) {
//         return callback(err);
//       }

//       dbConnection = db.db("pablo_rex");
//       console.log("Successfully connected to MongoDB.");

//       return callback();
//     });
//   },

//   getDb: function () {
//     return dbConnection;
//   },
// };

const mongoose = require('mongoose');
const {mongo} = require("../config");

const connectionString = mongo.MONGO_URI;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect(connectionString);
// };

module.exports ={
  connectToServer : async function(){
    await mongoose.connect(connectionString);
  },
  getDb: function (){
    
  }
}

