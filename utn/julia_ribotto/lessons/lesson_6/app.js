const express = require('express');
const app = express();
const animalRouter = require('./routes/AnimalRoute') 

//route.use("/create_animal",express.static(__dirname+"/../views/create_animals.html")); 

app.use('/',express.static(__dirname)); //doy permisos para acceder y compartir archivos

//conecto con las rutas definidas
app.use('/zoo',animalRouter);

app.get('/',(req,res) => {
    return res.json({message:'welcome'});
});

app.listen(8000,() => {
    console.log('servidor corriendo en port 8000');
}) 