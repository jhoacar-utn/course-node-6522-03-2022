const fs = require('fs');
const extract_students = require('./extract_git_students');
const ROUTE_PROJECT = "pwa_6522"

async function create_firebase_config() {

    const firebase_config = {
        functions: {
            source: "utn"
        },
        hosting: {
            public: "utn/welcome/public",
            rewrites: [
                {
                    source: `/${ROUTE_PROJECT}`,
                    function: "welcome"
                },
                {
                    source: `/${ROUTE_PROJECT}/`,
                    function: "welcome"
                },
                {
                    source: `/${ROUTE_PROJECT}/tasks`,
                    function: "tasks"
                },
                {
                    source: `/${ROUTE_PROJECT}/tasks/**`,
                    function: "tasks"
                }
            ]
        }
    }
    const students = await extract_students();

    students.map(student => {
        firebase_config.hosting.rewrites.push({
            source: `/${ROUTE_PROJECT}/${student}`,
            function: student
        }); //This is for root student
        firebase_config.hosting.rewrites.push({
            source: `/${ROUTE_PROJECT}/${student}/**`,
            function: student
        });//This is for child folders for student
    });



    fs.writeFile("firebase.json", JSON.stringify(firebase_config), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to firebase.json");
            return console.log(err);
        }
        console.log("firebase.json has been saved.");
    });

}

create_firebase_config();