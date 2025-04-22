'use strict';
const { Model } = require('sequelize');
const Event = require('./event')
const Tag = require('./tag')
module.exports = (sequelize, DataTypes) => {
  class EventTag extends Model {
    /*declare id: number;
    declare event_id: number;
    declare tag_id: number; */

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventTag.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    event_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'EventTag',
  });

  EventTag.belongsTo(Event, {
    as: "event", //res event {}
    foreignKey: "event_id",
  })
  
  Event.hasMany(EventTag, {
    as: "eventTags",
    sourceKey: "id",
    foreignKey: "event_id",
    onDelete: "CASCADE",
  })

  EventTag.belongsTo(Tag,{
    as:"tag",
    foreignKey: "tag_id"
  })

  Tag.hasMany(EventTag, {
    as: "events",
    sourceKey: "id",
    foreignKey: "tag_id",
    onDelete: "CASCADE",
  })


  return EventTag;
};