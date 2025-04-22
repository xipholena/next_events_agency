'use strict';
const { Model } = require('sequelize');
const User = require('./user')
const Event = require('./event')
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['free', 'reserved', 'sold', 'used', 'refund'],
      allowNull: false,
    },
    reserved_time: DataTypes.BIGINT,
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });

  Ticket.belongsTo(User, {
    as: "user",
    foreignKey: "user_id",
  })

  User.hasMany(Ticket, {
    as: "tickets",
    sourceKey: "id",
    foreignKey: "user_id",
    onDelete: "SET NULL",
  })
  
  
  Ticket.belongsTo(Event, {
    as: "event",
    foreignKey: "event_id"
  })
  
  Event.hasMany(Ticket, {
    as: "tickets",
    sourceKey: "id",
    foreignKey: "event_id",
    onDelete: "SET NULL",
  })

  return Ticket;
};