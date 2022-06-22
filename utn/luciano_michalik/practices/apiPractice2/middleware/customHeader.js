//En este ejemplo mando una api_key en el encabezado de la petición de postman

const customHeader = (req,res,next) => { //Es muy importante el next en los middlewares
    try{
        const apiKey = req.headers.api_key
        if(apiKey == "luchito"){
            next() //Valido el dato y dejo que pase al controlador
        }else{
            res.status(403)
            res.send({error:"API KEY INCORRECTA GATO"}) 
        }
    }catch(e){
        res.status(403)
        res.send({error:"ALGO MALO PASO EN EL CUSTOM HEADER"})

    }


}

module.exports = customHeader