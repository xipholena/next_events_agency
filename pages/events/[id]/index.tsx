import Layout from "@/components/layout/layout"
import Event from "@/server/models/event"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const EventsPage = ({event}) => {
  console.log('event parsed', event && JSON.parse(event))
 
    return (
      <Layout >
        <p>{event}</p>
      </Layout>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const router = createRouter<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const event = await Event.findByPk(id);
    
    //return it now, so getServerSideProps can return result of it's call
    if (!event) {
      // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#notfound
      return { props: { notFound: true } };
    }
    //prepare only after check
    const preparedEvent = JSON.stringify(event)

    return { props: { event: preparedEvent } };
  })

  return router.run(context?.req, context?.res)
}

export default EventsPage;