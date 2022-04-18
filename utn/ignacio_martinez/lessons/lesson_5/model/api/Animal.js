const fetch = require("node-fetch");
const { URL_API } = require("../../config");

const animals = [];

const resolvePromise = jsonData =>{

    animals = jsonData;
};

const rejetPromise = parameter =>{
    console.log("Reject", parameter)

};

const getAll = ()=>{
    
    fetch(URL_API+"/animals")
    .then(response=>response.json())
    .catch(rejectPromise);
    return animals;
};

const animal ={
    getAll: this.getAll
}

module.exports = animal;