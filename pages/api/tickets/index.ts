import Ticket from "@/server/models/ticket";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
const router = createRouter<NextApiRequest, NextApiResponse>();

router
    .get(async (req, res) => {
        const tickets = await Ticket.findAll();
        res.json({ tickets });
    })
    .get(async (req, res) => {
        const ticket = await Ticket.findByPk(1);
        res.json({ ticket });
    })

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