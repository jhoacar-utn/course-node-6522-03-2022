const express = require("express")

const app = express();

const animalRouter = require("./routes/Animal") //Importo el router de Animals 


app.use("/",express.static(__dirname))//Esto es para poder compartir los recursos de lesson_6 cuando se haga un /forest

app.use("/forest",animalRouter) //Para poder utiizar las rutas se utiliza el use. Se indica entre "" desde donde va a partir, es decir, localhost:8000/zoo/animals

app.get("/",(req,res)=>{
    return res.json({message:"Welcome to my DB"})
})


app.listen(8000,()=>{
    console.log("Server running in port 8000")
})