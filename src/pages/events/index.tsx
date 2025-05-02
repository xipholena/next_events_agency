import Layout from "@/src/components/layout/layout"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import container from "@/server/di";

const EventsPage = ({events}) => {
    return (
      <Layout >
        <p>{JSON.stringify(events)}</p>
      </Layout>
    )
}

export async function getServerSideProps(context) {
  const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(container.resolve('EventsController').handleSSRGetAll)
    
  return router.run(context?.req, context?.res)
}

export default EventsPage
