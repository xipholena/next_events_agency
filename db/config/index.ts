import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "event_agency",
    "event_agency",
    "event_agency",
    { dialect: 'mysql' }
)
