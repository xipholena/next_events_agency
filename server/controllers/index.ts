import { asClass } from "awilix";
import { UsersController } from "./usersController";
import { EventsController } from "./eventsController";
import { TicketsController } from "./ticketController";
import { TagsController } from "./tagsController";
import { ReviewsController } from "./reviewsController";
import { BaseController } from "./baseController";


export interface IControllerContainer {
    BaseController: BaseController;
    UsersController: UsersController;
    EventsController: EventsController;
    TicketsController: TicketsController;
    ReviewsController: ReviewsController;
    TagsController: TagsController
    //EventTagsController: EventTagsController;
}

const controllers = {
    UsersController: asClass(UsersController).singleton(),
    EventsController: asClass(EventsController).singleton(),
    TicketsController: asClass(TicketsController).singleton(),
    ReviewsController: asClass(ReviewsController).singleton(),
    TagsController: asClass(TagsController).singleton(),
    //EventTagsController: asClass(EventTagsController).singleton(),
}
export default controllers;