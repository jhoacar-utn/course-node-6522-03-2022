const fetch = require('node-fetch');

const { URL_API } = require('../../../api-config');

let animals = ["estoy vacio"];

const resolvePromise = jsonData =>{

    animals = jsonData;

}

const rejectPromise = parameter => {
    console.log("Reject",parameter);
}


const getAll = async ()=>{

    const response = await fetch(URL_API+"/animals");
    animals = await response.json();
    
    return animals;
};
const save=(animalData)=>{
    return{
        mesage:"Animal guardado satisfactoriamente"
    }
}

const animal = {
    getAll : getAll,
    save:save
}

module.exports = animal;

