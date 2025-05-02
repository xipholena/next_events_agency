import { asClass } from "awilix";
import { UsersService } from "./userService"
import { TicketsService } from "./ticketsService";
import { EventsService } from "./eventsService";
import { TagsService } from "./tagsService";
import { ReviewService } from "./reviewsService";

export interface IServiceContainer {
    UsersService: UsersService;
    TicketsService: TicketsService;
    EventsService: EventsService;
    TagsService: TagsService;
    ReviewsService: ReviewService;
}

const services = {
    UsersService: asClass(UsersService).singleton(),
    TicketsService: asClass(TicketsService).singleton(),
    EventsService: asClass(EventsService).singleton(),
    TagsService: asClass(TagsService).singleton(),
    ReviewsService: asClass(ReviewService).singleton(),
}
export default services