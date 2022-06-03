const {Datatype}=require("sequalize/types");
const { Sequelize } = require("sequelize/types");

const sequalize=require("../../config/mysql/connection")
const welcomeSchema = {
    message:Datatype.STRING
}


const Welcome = Sequelize.define('welcome', welcomeSchema,{
    tableName:"welcome"
});
    
    Welcome.getmessage=function(){
    return "mensaje con mongo"
    }
module.exports = Welcome;