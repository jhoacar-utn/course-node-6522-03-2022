const firebaseFunctions = require('firebase-functions');
const fs = require('fs');
const ROUTE_PROJECT = process.env.ROUTE_PROJECT || "pwa_6522";

const loadContentEnv = (student, studentFolder) => {
    const envStudent = contentENV.replaceAll('student', student);
    const envFile = studentFolder + '.env';
    fs.writeFileSync(envFile, envStudent);
}


const extract_students = require('./helpers/extract_students');
const students = extract_students();
students.map(student => {
    try {
        studentFolder = `./${student}/`;
        //loadContentEnv(student, studentFolder);
        const student_app = require(studentFolder);
        exports[`${ROUTE_PROJECT}_${student}`] = firebaseFunctions.https.onRequest(student_app);
    } catch (error) {
        console.log(error);
    }
});


