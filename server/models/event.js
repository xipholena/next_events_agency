'use strict';
const {Model} = require('sequelize');
const {EventTag} = require('./eventtag');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     //this.hasMany(models.Event)
    }
  }
  Event.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    event_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    performer_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    date: DataTypes.BIGINT,
    duration: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['draft', 'open', 'sold_out', 'finished']
    }
  }, {
    sequelize,
    modelName: 'event',
  });

  
  

  return Event;
};