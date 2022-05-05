
const mongoose = require('mongoose');
const {mongo} = require("../config");


const connectionString = mongo.MONGO_URI;


module.exports ={
  connectToServer : async function(){
    await mongoose.connect(connectionString);
  },
  getDb: function (){
    
  }
}

