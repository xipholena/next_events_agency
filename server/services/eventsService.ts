import BaseContext from "../di/baseContext";
import { IEvent } from "../models/event";

export class EventsService extends BaseContext {
    constructor(opts) {
        super(opts)
        this.findAllEvents = this.findAllEvents.bind(this)
        this.findEventById = this.findEventById.bind(this)
        this.handleSSRFindAllEvents = this.handleSSRFindAllEvents.bind(this)
        this.handleSSRFindEvent = this.handleSSRFindEvent.bind(this)
    }

    public findAllEvents(): Promise<IEvent[]> {
        return this.di.Event.findAll()
    }

    public findEventById(id): Promise<IEvent> {
        return this.di.Event.findByPk(id)
    }

    public handleSSRFindAllEvents(): Promise<IEvent[]> {
        return this.di.Event.findAll()
    }

    public handleSSRFindEvent(id): Promise<IEvent> {
        return this.di.Event.findByPk(id)
    }

}