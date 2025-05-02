import { asFunction } from "awilix";
import User, { UserType } from "./user";
import Event, { EventType } from "./event";
import Ticket, { TicketType } from "./ticket";
import Tag, { TagType } from "./tag";
import Review, { ReviewType } from "./review";
//import EventTag from "./eventTag";

export interface IModelContainer {
    User: UserType;
    Event: EventType;
    Ticket: TicketType;
    Review: ReviewType;
    Tag: TagType;
    //EventTag: EventTagType;
}
const ModelContainer = {
    User: asFunction(User).singleton(),
    Event: asFunction(Event).singleton(),
    Ticket: asFunction(Ticket).singleton(),
    Review: asFunction(Review).singleton(),
    Tag: asFunction(Tag).singleton(),
    //EventTag: asFunction(EventTag).singleton,
}
export default ModelContainer;