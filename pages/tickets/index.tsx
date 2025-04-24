import Layout from "@/components/layout/layout"
import Ticket from "@/server/models/ticket"


const Tickets = ({}) => {
    return (
      <Layout >
        <p></p>
      </Layout>
    )
}


export async function getStaticProps() {
  const ticket = await Ticket.findAll()
  console.log(ticket)
    return { props: {  } }
  }

export default Tickets