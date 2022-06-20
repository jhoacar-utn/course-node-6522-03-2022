// module.exports = {
//   connection: process.env.DB_CONNECTION,
//   MYSQL: 'mysql',
//   MONGO: 'mongodb',
//   mysql: {
//     uri: process.env.DB_URI_MYSQL
//   },
//   mongo: {
//     uri: process.env.DB_URI
//   }
// }
module.exports = {
  connection: process.env.DB_CONNECTION,
  MYSQL: 'mysql',
  MONGO: 'mongodb',
  mysql: {
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  mongo: {
    uri: process.env.DB_URI
  }
}