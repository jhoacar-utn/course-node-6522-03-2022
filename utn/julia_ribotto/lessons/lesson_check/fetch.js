
 let ejemplo = async()=>{
    let information = await fetch("https://rickandmortyapi.com/api/character") //petición GET - espero que haga el fetch efectivamente para que se ejecuten los metodos
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data)
        return data})
    .catch((err)=> console.log(err))
 }

 ejemplo()