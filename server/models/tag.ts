'use strict';
import { TagEnum } from "@/enums";
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import IContextContainer from "../di/interfaces/IContextContainer";

export interface ITag extends Model {
  id: number;

  type: TagEnum;
  tagName: string;

  createdAt: Date;
  updatedAt: Date;
}

export type TagType = typeof Model & {
  new(values?: object, options?: BuildOptions): ITag;
};

export default (ctx: IContextContainer) => {
  const Tag = <TagType>ctx.db.define("tags", {
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
    tagName: {
      field: "tag_name",
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
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

  return Tag
}
