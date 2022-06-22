const fetch = require("node-fetch")
const getAllProducts = async (res, req) => {
    const products = await fetch("https://fakestoreapi.com/products")
        .then(e => e.json())
        .catch(error => { throw new Error(error) })
    req.send(products)
}

const postProducts = async (res, req) => {
    let dataCollect = req.body;
    let dataPost = await fetch("https://6275b491bc9e46be1a0e149a.mockapi.io/products",
        {
            method: "POST",
            body: JSON.stringify(dataCollect),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(e => e.json())
        .then(e => JSON.stringify(e))
        .catch(error => { throw new Error(error) })

    req.send(`producto cargado:${dataPost}`)
}

module.exports = { getAllProducts, postProducts }
