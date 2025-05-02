
import Sequelize from "sequelize/types/sequelize";//!
import { IControllerContainer } from "../../controllers";
import { IModelContainer } from "../../models";
import { IServiceContainer } from "@/server/services";

export default interface IContextContainer
    extends IModelContainer,
    IServiceContainer, //!
    IControllerContainer { //extends
    config: any;
    db: Sequelize;
}
