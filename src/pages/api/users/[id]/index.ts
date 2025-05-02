import container from "@/server/di";
import { createRouteHandler } from "@/src/utils";
import { createContainer } from "awilix";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";


const { runtimeConfig, handler } = createRouteHandler(
    [
        {
            controllerName: 'UsersController',
            method: 'GET'
        },
        {
            controllerName: 'UsersController',
            method: 'GET'
        }
    ],
)


export const config = runtimeConfig

export default handler


/*const router = createRouter<NextApiRequest, NextApiResponse>();

router
    .get(container.resolve('UsersController').getUserById)

//createRouteHandler('UsersController', 'get)

//like hooks?
export const config = {
    //runtime: "edge",
    runtime: 'nodejs',
};

export default router.handler({
    onError: (err, req, res) => {
        console.error((err as any)?.stack);
        res.status((err as any)?.statusCode || 500).end((err as any)?.message);
    },
});*/