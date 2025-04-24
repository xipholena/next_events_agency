'use strict';
import { sequelize } from "@/db/config";
import { TagType } from "@/enums";
import { DataTypes, Model, Sequelize } from "sequelize";

class Tag extends Model {
  declare id: number;
  declare type: TagType;
  declare tag_name: string;
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
  modelName: 'tag',
});

export default Tag