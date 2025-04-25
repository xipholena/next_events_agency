import { UsersContoller } from "@/server/controllers/usersController";
import User from "@/server/models/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

const userController = new UsersContoller();

router
    .get(userController.getAllUsers)
    .get(userController.getUserById)


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