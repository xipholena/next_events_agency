import Ticket from "../models/ticket";

export class TicketsController {
    constructor() {
        this.getAllTickets = this.getAllTickets.bind(this)
        this.getTicketById = this.getTicketById.bind(this)
    }

    async getAllTickets(req, res) {
        const events = await Ticket.findAll();
        res.json({ events });
    }

    async getTicketById(req, res) {
        const event = await Ticket.findByPk(1);
        res.json({ event });
    }
}