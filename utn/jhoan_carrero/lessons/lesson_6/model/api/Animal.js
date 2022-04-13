const fetch = require('node-fetch');

const { URL_API } = require('../../config');
const ENDPOINT = URL_API + "/animals";

let animals = ["estoy vacio"];

const resolvePromise = jsonData =>{

    animals = jsonData;

}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}


const getAll = async ()=>{

    const response = await fetch(ENDPOINT);
    animals = await response.json();
    
    return animals;
};


const animal = {
    getAll : getAll
}

module.exports = animal;