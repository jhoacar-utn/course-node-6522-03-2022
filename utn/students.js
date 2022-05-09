const firebaseFunctions = require('firebase-functions');
const fs = require('fs');
const ROUTE_PROJECT = process.env.ROUTE_PROJECT || "pwa_6522";

const contentENV = `
DB_CONNECTION=mysql
DB_URI=mongodb://student:student@mongo.utn.jhoacar.me:27017/student
DB_DATABASE=student
DB_USER=student
DB_PASSWORD=student
DB_HOST=mysql.utn.jhoacar.me
DB_PORT=3306
`;

const loadContentEnv = (student, studentFolder) => {

    const envStudent = contentENV.replaceAll('student', student);
    const envFile = studentFolder+'.env';
    fs.writeFileSync(envFile,envStudent);
}


const extract_students = require('./helpers/extract_students');
const students = extract_students();
students.map(student => {
    //try {
        studentFolder = `./${student}/`;
        loadContentEnv(student, studentFolder);
        const student_app = require(studentFolder);
        exports[`${ROUTE_PROJECT}_${student}`] = firebaseFunctions.https.onRequest(student_app);
    //} catch (error) {
    //    console.log(error);
    //}
});


