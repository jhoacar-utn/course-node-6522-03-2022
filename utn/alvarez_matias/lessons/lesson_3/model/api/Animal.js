const { response } = require('express')
const fetch = require('node-fetch')
const {URL_API} = require('../../config')

let animals = []

const resolvePromise = jsonData => {
    animals = jsonData
}  
const rejectPromise = parametro => {
    console.log("Reject",parametro)
} 

const getAll = async() => {
    const response = await fetch(URL_API+'/animals')
    animals = response.json()

    return animals
}

const animal = {
    getAll: getAll
}

module.exports = animal