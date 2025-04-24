import Event from "@/server/models/event";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Event[]>,
) {
    const events = await Event.findAll()
    res.status(200).json(events);
}