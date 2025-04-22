'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    
    last_name: DataTypes.STRING(45),
    
    user_email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING(45)
    },

    role: {
      type: DataTypes.Enum,
      values: ['user', 'admin', 'moderator', 'operator']
      //values: [ROLES.User, ROLES.Admin, ROLES.Moderator, ROLES.Operator]
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};