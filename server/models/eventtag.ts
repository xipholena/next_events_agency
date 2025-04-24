'use strict';
import { DataTypes, Model, Sequelize } from "sequelize";
import Tag from "./tag";
import Event from "./event";
import { sequelize } from "@/db/config";

class EventTag extends Model {
  declare id: number;
  declare event_id: number;
  declare tag_id: number;


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

  createdAt: {
    field: "created_at",
    allowNull: false,
    type: DataTypes.DATE,
  },

  updatedAt: {
    field: "updated_at",
    allowNull: false,
    type: DataTypes.DATE,
  },

}, {
  sequelize,
  modelName: 'events_tag',
});

EventTag.belongsTo(Event, {
  foreignKey: "event_id",
})

Event.hasMany(EventTag, {
  as: "eventTags",
  sourceKey: "id",
  foreignKey: "event_id",
  onDelete: "CASCADE",
})

EventTag.belongsTo(Tag, {
  as: "tag",
  foreignKey: "tag_id"
})

Tag.hasMany(EventTag, {
  as: "events",
  sourceKey: "id",
  foreignKey: "tag_id",
  onDelete: "CASCADE",
})

export default EventTag