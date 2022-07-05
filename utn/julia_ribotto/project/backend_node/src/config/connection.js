const {connection, SQL, MONGO} = require('./database');

let initDatabase;

switch(connection) {
    case SQL:
        initDatabase = require('./sql/init');
        break;
    case MONGO:
        initDatabase = require('./mongo/init');
        break;
    default:
        throw `Must specify DB_CONNECTION, it can only be ${SQL} or ${MONGO}`;
};

module.exports = initDatabase;