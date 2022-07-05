module.exports = {
    secretKey: process.env.SECRET_KEY || 'mySecretKey',
    saltRounds: parseInt(process.env.SALT_ROUNDS || 10)
  }