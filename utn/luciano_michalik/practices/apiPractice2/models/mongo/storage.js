//Aca defino el esquema para la coleccion de usuarios

const mongoose = require("mongoose")

const storageScheme = new mongoose.Schema(
    { //En esta sección se declara la estructura
        url:{
            type:String
        },
        fileName:{
            type:String
        }
    },
    {
        //Este apartado permite registrar las marcas de tiempo
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("storage",storageScheme) 