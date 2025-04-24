import Ticket from "@/server/models/ticket";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Ticket[]>,
) {
    const tickets = await Ticket.findAll()
    res.status(200).json(tickets);
}