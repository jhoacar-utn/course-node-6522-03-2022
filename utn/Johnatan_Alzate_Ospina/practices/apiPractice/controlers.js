const fetch=require("node-fetch")
const getAllproducts=async(req,res)=>{
    
    let datos=await fetch('https://fakestoreapi.com/products/1')
    
    .then(res=>res.json())
    .catch(err => console.log(err.json()))
    
    res.send(datos)
}
//json.parse() conviente a formato json
//json.stringify()convierte formato string en formato json
const postProduct=async(req,res)=>{
    let dataPost=req.body
    let datoCargado=await fetch("https://6275b491bc9e46be1a0e149a.mockapi.io/products",{
    method:"POST",
    body:JSON.stringify(dataPost),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
 

})

.then(res=>res.json())
.then(res=>JSON.stringify(res))
.catch(err=>console.log(err.json()))

    res.send("Producto cargado "+ datoCargado)
}



module.exports={getAllproducts,postProduct}