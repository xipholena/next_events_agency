import Layout from "@/src/components/layout/layout"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import container from "@/server/di";

const EventPage = ({event}) => {
    return (
      <Layout >
        <p>{JSON.stringify(event)}</p>
      </Layout>
    )
}

export async function getServerSideProps(context) {
  context.req.contextParams = context.params;
  const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(container.resolve('EventsController').handleSSRGetEvent)
    
  return router.run(context?.req, context?.res)
}

export default EventPage
