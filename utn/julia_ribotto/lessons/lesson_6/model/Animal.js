const {CONNECTION_DATA} = require('../config');

if(CONNECTION_DATA == "api") {
    module.exports = require("./api/Animal-api");
} else if (CONNECTION_DATA == "mysql") {
    module.exports = require("./api/Animal-mysql");
} else if (CONNECTION_DATA == "mongo") {
    module.exports = require("./api/Animal-mongo");
}else{
    module.exports = require("./api/Animal-api");
};