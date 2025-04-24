'use strict';
import { ReviewStatus } from "@/enums";
import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./user";
import Event from "./event"
import { sequelize } from "@/db/config";


class Review extends Model {
  declare id: number;
  declare date?: number;
  declare rating?: number;
  declare text?: string;
  declare status: ReviewStatus;
  declare event_id: number;
  declare user_id: number;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Review.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  date: DataTypes.BIGINT,
  rating: DataTypes.INTEGER,
  text: DataTypes.STRING(700),
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'approved'],
    allowNull: false,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
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
  modelName: 'review',
});


Review.belongsTo(User, {
  as: "user",
  foreignKey: "user_id"
})

User.hasMany(Review, {
  as: "reviews",
  sourceKey: "id",
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

Review.belongsTo(Event, {
  as: "event",
  foreignKey: "event_id"
})

Event.hasMany(Review, {
  as: "reviews",
  sourceKey: "id",
  foreignKey: "event_id",
  onDelete: "CASCADE",
})

export default Event