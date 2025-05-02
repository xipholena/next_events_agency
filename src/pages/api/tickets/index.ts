import { TicketsController } from "@/server/controllers/ticketController";
import container from "@/server/di";
import { createContainer } from "awilix";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
const router = createRouter<NextApiRequest, NextApiResponse>();

//const ticketsController = new TicketsController()

router
    .get(container.resolve('TicketsController').getAllTickets)


export const config = {
    //runtime: "edge",
    runtime: 'nodejs',
};

export default router.handler({
    onError: (err, req, res) => {
        console.error((err as any)?.stack);
        res.status((err as any)?.statusCode || 500).end((err as any)?.message);
    },
});


/*
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Ticket[]>,
) {
    const tickets = await Ticket.findAll()
    res.status(200).json(tickets);
}
*/