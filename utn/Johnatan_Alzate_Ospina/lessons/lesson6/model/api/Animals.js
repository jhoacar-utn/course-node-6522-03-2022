const {response}=require('express')
const fetch = require('node-fetch');


const { Url_api } = require('../../api-config');
const ENDPOINT= Url_api + "/animals"

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
const save= async(animalData)=>{
    const response= await fetch(ENDPOINT,{
        method:"post",
        body: json.stringify(animalData)
    })
   const message= await response.json()
    return{
        mesage: message
    }
}

const animal = {
    getAll : getAll,
    save:save
}

module.exports = animal;

