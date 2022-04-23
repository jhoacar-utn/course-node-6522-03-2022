const fetch = require('node-fetch');
const {URL_API} = require('../../config') //"destructuring": accessing data directly from json
const ENDPOINT = URL_API + "/animals";

let animals = ['empty'];

/*
const resolvedPromise = jsonData => { 
    animals = jsonData; 
};

const rejectedPromise = parameter => {
    console.log("unresolved",parameter);
};
*/

const getAll = async ()=>{ 
    const response = await fetch(URL_API+'/animals'); //apunto al endpoint
    animals = await response.json();

    // .then(response => response.json())
    // .then(resolvedPromise)
    // .catch(rejectedPromise);

    return animals;
};

const save = async (animalData)=>{

    const response = await fetch(ENDPOINT,{
        method: "POST",
        body: JSON.stringify(animalData)
    })

    const message = await response.json();

    return {
        message: message
    }
}

const animal = {
    getAll : getAll,
    save : save
}

module.exports = animal; 