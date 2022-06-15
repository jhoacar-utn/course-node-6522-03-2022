const {CONNECTION_DATA} = require('../config')

if(CONNECTION_DATA == 'api')
    module.exports = require('./api/Animal')
else if(CONNECTION_DATA == 'mysql')
    module.exports = require('./mysql/Animal')
else if(CONNECTION_DATA == 'mongo')
    module.exports = require('./mongo/Animal')
else{
    module.exports = require('./api/Animal')
}