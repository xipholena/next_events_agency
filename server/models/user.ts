'use strict';
import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import IContextContainer from "../di/interfaces/IContextContainer";
import { RoleEnum } from "@/enums";

export interface IUser extends Model {
  id: number;
  firstName: string;
  lastName: string;
  userEmail: string;
  password: string;
  role: RoleEnum;
  createdAt: Date;
  updatedAt: Date;
}

export type UserType = typeof Model & {
  new(values?: object, options?: BuildOptions): IUser;
};

export default (ctx: IContextContainer) => {
  const User = <UserType>ctx.db.define("users", { //! 
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    firstName: {
      field: "first_name",
      type: DataTypes.STRING(45),
      allowNull: false
    },

    lastName: {
      field: "last_name",
      type: DataTypes.STRING(45),
    },

    userEmail: {
      field: "user_email",
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin', 'moderator', 'operator']
      //values: [ROLES.User, ROLES.Admin, ROLES.Moderator, ROLES.Operator]
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

    /*tickets: {
      type: ITicket[]
    }*/
  })

  return User
}
/*
class User extends Model {
  declare id: number;
  declare first_name: string;
  declare last_name?: string;
  declare user_email: string;
  declare password: string;
  declare role: ROLES[];
  declare tickets?: ITicket[];
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.

  static associate(models) {
    // define association here
  }
   *//*
}

User.init({
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
allowNull: false,
},

first_name: {
type: DataTypes.STRING(45),
allowNull: false
},

last_name: DataTypes.STRING(45),

user_email: {
type: DataTypes.STRING(128),
allowNull: false,
unique: true
},

password: {
type: DataTypes.STRING(45),
allowNull: false,
},

role: {
type: DataTypes.ENUM,
values: ['user', 'admin', 'moderator', 'operator']
//values: [ROLES.User, ROLES.Admin, ROLES.Moderator, ROLES.Operator]
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
modelName: 'user',
});
*/
//export default User;