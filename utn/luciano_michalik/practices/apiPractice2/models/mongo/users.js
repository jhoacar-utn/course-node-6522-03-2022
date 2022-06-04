//Aca defino el esquema para la coleccion de usuarios

const mongoose = require("mongoose")

const userScheme = new mongoose.Schema(
    { //En esta sección se declara la estructura
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{ //Permisos, solo tiene 2 posibilidades "user" que es el normal, o "admin" para administradores
            type:["user","admin"],
            default:"user"
        }
    },
    {
        //Este apartado permite registrar las marcas de tiempo
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("users",userScheme) //users es el nombre del modelo, userScheme es la estructura