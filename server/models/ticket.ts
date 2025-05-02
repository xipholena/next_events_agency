'use strict';
import { TicketStatus } from "@/enums";
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import IContextContainer from "../di/interfaces/IContextContainer";

export interface ITicket extends Model {
  id: number;

  status: TicketStatus;
  reservedTime: number;
  userId?: number;
  eventId?: number;

  createdAt: Date;
  updatedAt: Date;
}

export type TicketType = typeof Model & {
  new(values?: object, options?: BuildOptions): ITicket;
};

export default (ctx: IContextContainer) => {
  const Ticket = <TicketType>ctx.db.define("tickets", { //! 
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

    reservedTime: {
      field: "reserved_time",
      type: DataTypes.BIGINT,
    },

    userId: {
      field: "user_id",
      type: DataTypes.INTEGER
    },

    eventId: {
      field: "event_id",
      type: DataTypes.INTEGER
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

  Ticket.belongsTo(ctx.User, {
    as: "user",
    foreignKey: "user_id",
  })

  ctx.User.hasMany(Ticket, {
    as: "tickets",
    sourceKey: "id",
    foreignKey: "user_id",
    onDelete: "SET NULL",
  })

  Ticket.belongsTo(ctx.Event, {
    as: "event",
    foreignKey: "event_id"
  })
  return Ticket
}
/*
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
   *//*
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
*/
//export default Ticket;