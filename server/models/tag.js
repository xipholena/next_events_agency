'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['event_type', 'genre', 'age', 'duration', 'city'],
      allowNull: false,
    },
    tag_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};