import { EventsController } from "@/server/controllers/eventsController";
import container from "@/server/di";
import Event from "@/server/models/event";
import { createContainer } from "awilix";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();


router
    .get(container.resolve('EventsController').getEventById)



export const config = {
    //runtime: "edge",
    runtime: 'nodejs',
};
//handler()
export default router.handler({
    onError: (err, req, res) => {
        console.error((err as any)?.stack);
        res.status((err as any)?.statusCode || 500).end((err as any)?.message);
    },
});