import { Sequelize } from "sequelize";

export const sequelize = () => {
    return new Sequelize(
        "event_agency",
        "event_agency",
        "event_agency",
        { dialect: 'mysql' }
    )
}

