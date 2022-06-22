const mongoose = require("mongoose")
//URI -> mongodb://luciano_michalik:luciano_michalik@mongo.utn.jhoacar.me/luciano_michalik


const dbConnect = () =>{
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err,res)=>{
            if(!err){
                console.log("*** SUCCESFULLY CONNECTION TO DB ***")
            }else{
                console.log("*** ERROR WITH CONNECTION TO DB ***")
            }
        })
}

module.exports = dbConnect