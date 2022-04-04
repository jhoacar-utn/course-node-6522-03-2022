require('dotenv').config()
const functions = require('firebase-functions');
const ROUTE_PROJECT = process.env.ROUTE_PROJECT || "pwa_6522";

const welcome_app = require('./welcome/index.js');
exports[`${ROUTE_PROJECT}_welcome`] = functions.https.onRequest(welcome_app);

const tasks_app = require('./tasks/index.js');
exports[`${ROUTE_PROJECT}_tasks`] = functions.https.onRequest(tasks_app);


const extract_students = require('./helpers/extract_students');
const students = extract_students();
students.map(student => {
    const student_app = require(`./${student}/index.js`);
    exports[`${ROUTE_PROJECT}_${student}`] = functions.https.onRequest(student_app);
});


