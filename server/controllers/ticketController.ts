import BaseContext from "../di/baseContext";
import { ITicket } from "../models/ticket";


export class TicketsController extends BaseContext {
    constructor(opts) {
        super(opts)
        this.getAllTickets = this.getAllTickets.bind(this)
        this.getTicketById = this.getTicketById.bind(this)
        this.handleSSRGetAll = this.handleSSRGetAll.bind(this)
        this.handleSSRGetTicket = this.handleSSRGetTicket.bind(this)
    }

    public getTicketById(req, res): Promise<ITicket> {
        return this.di.TicketsService.findTicketById(req?.query?.id).then(ticket => {
            return res.json({
                error: false,
                message: '',
                data: ticket
            })
        }).catch(e => {
            return res.status(404).json({
                error: true,
                message: `Ticket with id ${req?.query?.id} was not found!`,
                data: null,
            })
        });

    }

    public getAllTickets(req, res): Promise<ITicket[]> {
        return this.di.TicketsService.findAllTickets().then(tickets => {
            return res.json({
                error: false,
                message: "",
                data: tickets,
            });
        }).catch(e => {
            return res.status(404).json({
                error: true,
                message: "No tickets available!",
                data: null,
            })
        });

    }

    public handleSSRGetAll(req, res): Promise<ITicket[]> {
        return this.di.TicketsService.handleSSRFindAllTickets().then(tickets => {
            const serializableTickets = JSON.parse(JSON.stringify(tickets) ?? '')
            return { props: { tickets: serializableTickets } }
        }).catch(e => {
            return { props: { notFound: true } }
        })

    }

    public handleSSRGetTicket(req, res): Promise<ITicket> {
        const { id } = req.contextParams;
        return this.di.TicketsService.handleSSRFindTicket(id).then(ticket => {
            const serializableTicket = JSON.parse(JSON.stringify(ticket) ?? '')
            return { props: { ticket: serializableTicket } }
        }).catch(e => {
            return { props: { notFound: true } };
        })
    }

}