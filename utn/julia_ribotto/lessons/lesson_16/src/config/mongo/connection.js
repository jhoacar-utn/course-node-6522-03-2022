const mongoose = require('mongoose');
const {uri} = require('../database');

if(!uri) {
    throw `Must specify connection DB_URI as an environment variable`;
}

const connection = async () => {
    await mongoose.connect(uri);
};

module.exports = {
    connection
};