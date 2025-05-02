
import controllers from "../controllers";
import { sequelize } from "../../db/config";
import ModelContainer, { IModelContainer } from "../models";
import * as awilix from "awilix";
import config from "@/config";
import services from "../services";



const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});


container.register({
    config: awilix.asValue(config),
    db: awilix.asFunction(sequelize).singleton(),
    ...ModelContainer,
    ...services,
    ...controllers,
});


export default container;