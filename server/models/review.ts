'use strict';
import { ReviewStatus } from "@/enums";
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import IContextContainer from "../di/interfaces/IContextContainer";

export interface IReview extends Model {
  id: number;

  date?: number;
  rating?: number;
  text?: string;
  status: ReviewStatus;
  eventId: number;
  userId: number;

  createdAt: Date;
  updatedAt: Date;
}

export type ReviewType = typeof Model & {
  new(values?: object, options?: BuildOptions): IReview;
};

export default (ctx: IContextContainer) => {
  const Review = <ReviewType>ctx.db.define("reviews", {
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
    eventId: {
      field: "event_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      field: "user_id",
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
  })

  Review.belongsTo(ctx.User, {
    as: "user",
    foreignKey: "user_id"
  })

  ctx.User.hasMany(Review, {
    as: "reviews",
    sourceKey: "id",
    foreignKey: "user_id",
    onDelete: "CASCADE",
  })

  Review.belongsTo(ctx.Event, {
    as: "event",
    foreignKey: "event_id"
  })

  ctx.Event.hasMany(Review, {
    as: "reviews",
    sourceKey: "id",
    foreignKey: "event_id",
    onDelete: "CASCADE",
  })

  return Review
}
