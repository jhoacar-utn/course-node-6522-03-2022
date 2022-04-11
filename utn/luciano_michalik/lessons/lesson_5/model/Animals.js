const CONNECTION_DATA = require("../config") //Requiere el tipo de conexión desde config.js. Si la opcion definida es api exporta animals de la logica de api

if(CONNECTION_DATA == "api")
    module.exports = require("./api/Animals")
else if(CONNECTION_DATA == "mysql")
    module.exports = require("./mysql/Animals")
else if(CONNECTION_DATA == "mongo")
    module.exports = require("./mongo/Animals") 