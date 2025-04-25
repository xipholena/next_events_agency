import { EventsController } from "@/server/controllers/eventsController";
import Event from "@/server/models/event";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();
const eventsController = new EventsController();

router
    .get(eventsController.getAllEvents)
    .get(eventsController.getEventById)

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
    res: NextApiResponse<Event[]>,
) {
    const events = await Event.findAll()
    res.status(200).json(events);

import { createRouter, expressWrapper } from "next-connect";
*/
