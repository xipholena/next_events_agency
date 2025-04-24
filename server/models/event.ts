'use strict';
import { sequelize } from "@/db/config";
import { EventStatus, IReview, ITag } from "@/interfaces";
import { DataTypes, Model, Sequelize } from "sequelize";


class Event extends Model {
  declare id: number;
  declare event_name: string;
  declare performer_name: string;
  declare description: string;
  declare date?: number;
  declare duration?: number;
  declare capacity?: number;
  declare address: string;
  declare price: number;
  declare status: EventStatus;
  declare tags?: ITag[];
  declare reviews?: IReview[];
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
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['draft', 'open', 'sold_out', 'finished'],
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
  modelName: 'event',
});

export default Event




