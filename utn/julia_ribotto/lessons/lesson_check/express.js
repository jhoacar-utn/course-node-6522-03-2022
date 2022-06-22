const express = require("express");

const app = express();
const path = require('path');

//de donde saca las paginas
app.set('views',path.join(__dirname,'views'));

//que motor usa para renderizar
app.set("view engine","ejs");

//de donde saca archivos estáticos --> (css,images,etc)
app.use(express.static(path.join(__dirname,'public')));

//indicarle al server que vamos a recibir info en formato json
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//metodos de express que se usan comunmente
//pido información a mi servidor
app.get("/",(req,res)=>{
    res.render("express")
});

app.post("/publish",(req,res)=>{
    let dato = req.body;
    console.log(dato);

    res.render("publishResponse")
});

//app.use()

//establece puerto por el que voy a estar comunicandome
app.listen(8000, ()=>{
    console.log("server en puerto 8000");
})

