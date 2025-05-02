import container from "@/server/di";
import { IncomingMessage } from "http";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'use'

export const createRouteHandler = (
  controllers: { controllerName: string, method?: Method }[],
  context?: GetServerSidePropsContext,
  contextMetadata?: any
): Promise<unknown> | Record<string, any> | { runtimeConfig: any, handler: any } => {
  const router = createRouter<NextApiRequest, NextApiResponse>()

  if (context) {
    context.req.contextMetadata = contextMetadata || {};

    controllers.forEach(({ controllerName, method }) => {
      router.get(container.resolve(controllerName).handleRequest)
    })
    return router.run(context?.req, context?.res)
  }



  if (!context) {
    controllers.forEach(({ controllerName, method }) => {
      router.get(container.resolve(controllerName).handleRequest)
    })
    return {
      runtimeConfig: {
        runtime: 'nodejs',
      },
      handler: router.handler({
        onError: (err, req, res) => {
          console.error((err as any)?.stack);
          res.status((err as any)?.statusCode || 500).end((err as any)?.message);
        },
      })
    }
  }


}

//loops over controllerName: string[],
// actionName is useless, it must be one action in controller
//actionName can be same name in each controller and hardcoded here
//put, post, delete: let's have a  form near users list



/*if (context) {
    router.get(container.resolve(controllerName).handleSSPRequest)
  } else {
    router.get(container.resolve(controllerName).handleNextApiRequest)
}*/

//type ExtendedNextRequest = IncomingMessage & { cookies: NextApiRequest } & { contextParams: any }
//type ExtendedNextRequest = NextApiRequest & { contextParams: any }
//type CustomRequest = ExtendedNextRequest
//params will be 1 object


export const createResponse = (data?: any, entityName?: string) => {
  const basicResponse = {
    nextApi: {
      success: {
        data,
        message: '',
        error: false,
      },
      error: {
        error: true,
        message: `${entityName} was not found!`,
        data: null,
      }
    },
    getSSP: {
      success: { props: { [entityName]: data } },
      error: { props: { notFound: true } },
    },
  }
  return basicResponse
}