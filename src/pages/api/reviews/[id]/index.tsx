import container from "@/server/di";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
    .get(container.resolve('ReviewsController').getReviewById)

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