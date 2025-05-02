import BaseContext from "../di/baseContext";
import { IEvent } from "../models/event";
export class EventsController extends BaseContext {

    constructor(opts) {
        super(opts)
        this.getAllEvents = this.getAllEvents.bind(this)
        this.getEventById = this.getEventById.bind(this)
        this.handleSSRGetAll = this.handleSSRGetAll.bind(this)
        this.handleSSRGetEvent = this.handleSSRGetEvent.bind(this)
    }

    public getAllEvents(req: any, res: any): Promise<IEvent[]> {
        return this.di.EventsService.findAllEvents().then(events => {
            return res.json({
                error: false,
                message: "Events were found successfully!",
                data: events,
            })
        }).catch(e => {
            return res.status(404).json({
                error: true,
                message: "No events found!"
            })
        });
    }

    public getEventById(req, res): Promise<IEvent> {
        return this.di.EventsService.findEventById(req?.query?.id).then(event => {
            return res.json({
                error: false,
                message: '',
                data: event
            })
        }).catch(e => {
            return res.status(404).json({
                error: true,
                message: `Event with id ${req?.query?.id} not found!`,
                data: null,
            })
        });
    }

    public handleSSRGetEvent(req, res): Promise<IEvent> {
        const { id } = req?.contextParams;
        return this.di.EventsService.handleSSRFindEvent(id).then(event => {
            const serializableEvent = JSON.parse(JSON.stringify(event) ?? '')

            return { props: { event: serializableEvent } }
        }).catch(e => {

            return { props: { notFound: true } };
        });
    }
    public handleSSRGetAll(req, res): Promise<IEvent[]> {
        return this.di.EventsService.handleSSRFindAllEvents().then(events => {

            const serializableEvents = JSON.parse(JSON.stringify(events) ?? '')

            return { props: { events: serializableEvents } }
        }).catch(e => {

            return { props: { notFound: true } }
        });
    }
}