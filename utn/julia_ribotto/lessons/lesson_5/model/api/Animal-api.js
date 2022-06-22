const fetch = require('node-fetch');
const {URL_API} = require('../../config') //destructuring

let animals = ['empty'];

const resolvedPromise = jsonData => { 
    animals = jsonData; 
};

const rejectedPromise = parameter => {
    console.log("unresolved",parameter);
};


const getAll = async ()=>{ 
    const response = await fetch(URL_API+'/animals');
    animals = await response.json();

    // .then(response => response.json())
    // .then(resolvedPromise)
    // .catch(rejectedPromise);

    return animals;
};

const animal = {
    getAll : getAll
}

module.exports = animal; 