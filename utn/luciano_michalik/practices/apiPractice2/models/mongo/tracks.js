//Aca defino el esquema para la coleccion de tracks

const mongoose = require("mongoose")

const tracksScheme = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      album: {
        type: String,
      },
      cover: {
        type: String,
        validate: {
          validator: (req) => {
            return true;
          },
          message: "ERROR_URL",
        },
      },
      artist: {
        name: {
          type: String,
        },
        nickname: {
          type: String,
        },
        nationality: {
          type: String,
        },
      },
      duration: {
        start: {
          type: Number,
        },
        end: {
          type: Number,
        },
      },
      mediaId: {
        type: mongoose.Types.ObjectId, //Me la devuelve el storage.js
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

module.exports = mongoose.model("tracks",tracksScheme) //users es el nombre del modelo, tracksScheme es la estructura