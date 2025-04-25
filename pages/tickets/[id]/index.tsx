import Layout from "@/components/layout/layout"
import Ticket from "@/server/models/ticket"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const TicketPage = ({ticket}) => {
  console.log('ticket parsed', ticket && JSON.parse(ticket))
    return (
      <Layout >
        <p>{ticket}</p>
      </Layout>
    )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const router = createRouter<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const ticket = await Ticket.findByPk(id);
    
    //return it now, so getServerSideProps can return result of it's call
    if (!ticket) {
      // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#notfound
      return { props: { notFound: true } };
    }
    //prepare only after check
    const preparedTicket = JSON.stringify(ticket)

    return { props: { ticket: preparedTicket } };
  })

  return router.run(context?.req, context?.res)
}

export default TicketPage