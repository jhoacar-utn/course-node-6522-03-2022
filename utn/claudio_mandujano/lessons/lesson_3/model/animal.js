const CONNECION_DATA= "api";

if(CONNECION_DATA =="api"){
    module.exports =require("../api/Animal")
}else if(CONNECION_DATA == "mysql"){
    module.exports = require('../mysql/Animal')
}
