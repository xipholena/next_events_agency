'use strict';
import { TicketStatus } from "@/enums";
import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./user";
import Event from "./event";
import { sequelize } from "@/db/config";

class Ticket extends Model {
  declare id: number;
  declare status: TicketStatus;
  declare reserved_time: number;
  declare user_id?: number;
  declare event_id?: number;
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
  event_id: DataTypes.INTEGER,
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
  modelName: 'ticket',
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

export default Ticket;