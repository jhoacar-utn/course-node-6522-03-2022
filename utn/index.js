const firebaseFunctions = require('firebase-functions');
const ROUTE_PROJECT = process.env.ROUTE_PROJECT || "pwa_6522";

const functions = require('./students');

const welcome_app = require('./welcome/index.js');
functions[`${ROUTE_PROJECT}_welcome`] = firebaseFunctions.https.onRequest(welcome_app);

const tasks_app = require('./tasks/index.js');
functions[`${ROUTE_PROJECT}_tasks`] = firebaseFunctions.https.onRequest(tasks_app);


module.exports = functions;
