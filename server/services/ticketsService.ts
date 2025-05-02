import { error } from "console";
import BaseContext from "../di/baseContext";
import { ITicket } from "../models/ticket";

export class TicketsService extends BaseContext {
    constructor(opts) {
        super(opts)
        this.findAllTickets = this.findAllTickets.bind(this)
        this.findTicketById = this.findTicketById.bind(this)
        this.handleSSRFindAllTickets = this.handleSSRFindAllTickets.bind(this)
        this.handleSSRFindTicket = this.handleSSRFindTicket.bind(this)
    }

    public findAllTickets(): Promise<ITicket[]> {
        return this.di.Ticket.findAll()
    }

    public findTicketById(id): Promise<ITicket> {
        return this.di.Ticket.findByPk(id)
    }

    public handleSSRFindAllTickets(): Promise<ITicket[]> {
        return this.di.Ticket.findAll()
    }
    public handleSSRFindTicket(id): Promise<ITicket> {
        return this.di.Ticket.findByPk(id)
    }


}