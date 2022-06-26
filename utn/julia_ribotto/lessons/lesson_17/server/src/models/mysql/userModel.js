//Trabajo MySQL con sequelize

const {DataTypes} = require('sequelize');
const sequelize = require('../../config/mysql/connection');

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
  }
  }, {
    tableName: 'users'
});

const customCreate = async (dataUser) => {
  return await User.create(dataUser);
};


//Compatibilizando sequelize con mongoose
const customUpdate = async (dataToFind, dataToUpdate) => {

  await User.update(dataToUpdate, { where: dataToFind });

};

const customFind = async (dataToFind) => {
  //raw:true limpia el modelo de metodos y devuelve texto plano -> JWT related
  const user = await User.findOne({where: dataToFind, raw:true});
  return user
};

console.log("Using Sequelize");

User.customCreate = customCreate;
User.customUpdate = customUpdate;
User.customFind = customFind;

module.exports = User;