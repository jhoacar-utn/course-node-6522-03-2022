const fetch = require('node-fetch');

const resolvedPromise = parameter => {
    console.log("resolved",parameter);
};

const rejectedPromise = parameter => {
    console.log("unresolved",parameter);
};

fetch("https://6254af1d89f28cf72b60cb0a.mockapi.io/animals").then(resolvedPromise).catch(rejectedPromise);