import Event from "../models/event";
export class EventsController {
    constructor() {
        this.getAllEvents = this.getAllEvents.bind(this)
        this.getEventById = this.getEventById.bind(this)
    }

    async getAllEvents(req, res) {
        const events = await Event.findAll();
        res.json({ events });
    }

    async getEventById(req, res) {
        console.log('===================req', req?.query?.id)
        console.log('===================req', req?.params)
        const event = await Event.findByPk(1);
        res.json({ event });
    }
}