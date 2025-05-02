'use strict';
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import IContextContainer from "../di/interfaces/IContextContainer";

export interface IEventTag extends Model {
  id: number;

  eventId: number;
  tagId: number;

  createdAt: Date;
  updatedAt: Date;
}

export type EventTagType = typeof Model & {
  new(values?: object, options?: BuildOptions): IEventTag;
};

export default (ctx: IContextContainer) => {
  const EventTag = <EventTagType>ctx.db.define("eventTags", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    eventId: {
      field: "event_id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },

    tagId: {
      field: "tag_id",
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


  })//! 

  EventTag.belongsTo(ctx.Event, {
    foreignKey: "event_id",
  })

  ctx.Event.hasMany(EventTag, {
    as: "eventTags",
    sourceKey: "id",
    foreignKey: "event_id",
    onDelete: "CASCADE",
  })

  EventTag.belongsTo(ctx.Tag, {
    as: "tag",
    foreignKey: "tag_id"
  })

  ctx.Tag.hasMany(EventTag, {
    as: "events",
    sourceKey: "id",
    foreignKey: "tag_id",
    onDelete: "CASCADE",
  })

  return EventTag
}
/*
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
*/