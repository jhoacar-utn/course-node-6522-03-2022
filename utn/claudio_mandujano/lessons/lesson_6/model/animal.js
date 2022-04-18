const {CONNECION_DATA}= require("../config");

if(CONNECION_DATA =="api"){
    module.exports =require("../model/api/animal")
}else if(CONNECION_DATA == "mysql"){
    module.exports = require('../mysql/animal')
}else{
    module.exports = require("../model/api/animal")
}
