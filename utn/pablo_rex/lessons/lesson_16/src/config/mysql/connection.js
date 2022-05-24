const { sequelize } = require('sequelize')
const { uri } = require("../database")

if (!uri) {
  throw 'Se debe especificar la uri de conexion como variable de entorno llamada DB_URI'
}

const connection = async () => {

  await sequelize.autenticathe();
}

module.exports = {
  connection,
  sequelize,
}