const fetch = require('node-fetch')

const getAllProducts=async(req,res)=>{
    let datos = await fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .catch(err=>console.log(err.json()))
    res.send(datos)
}

const postProducts=async(req,res)=>{ //El método POST manda datos a la DB en mockapi
    let datoPost = req.body

    let datoCargado = await fetch("https://6275b491bc9e46be1a0e149a.mockapi.io/products",
        {   
            method: "POST",
            body:JSON.stringify(datoPost),        //Con JSON.stringify transforma
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>JSON.stringify(res))
        .catch(err=>console.log(err.json()))

    res.send(`Producto cargado:${datoCargado}`)
}

module.exports = {getAllProducts,postProducts}