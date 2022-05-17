//require modules
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

//importo ruta
import avatarRoute from './routes/avatarRoute'

//Habilito sección para el body (app.use()) 
app.use(express.json());

//Implemento ruta
app.use("/avatar",avatarRoute);


//Setup del minimal server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(">> Server on port " + PORT);
})