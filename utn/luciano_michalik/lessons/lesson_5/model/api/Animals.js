const fetch = require("node-fetch") //Requiero el comando de fetch para poder trabajar con el
const {URL_API} = require("../../config") //El require devuelve un objeto por como lo configuré al "config.js". Por esto, la URL_API debe estar entre llaves y debe llamarse tal cual el atributo que yo necesito de config.js

let animals = [];

const resolvePromise = jsonData => { //Callback del .then
        animals = jsonData;
        console.log("RESOLVED:",parameter)
}

const rejectPromise = parameter => { //Callback del .catch
        console.log("REJECTED:",parameter)
}

const getAll = async () =>{
        
        try{
        const response = await fetch(URL_API); //El await y async van de la mano!! Si pongo await, debe ir un aysnc en el nombre de la funcion 
        animals = await response.json() //Como response.json() es también una promesa tengo que usar el await.
        }
        catch(e){
                animals = e
        }
        return animals
}

const animal = {
        getAll:getAll
}

module.exports=animal