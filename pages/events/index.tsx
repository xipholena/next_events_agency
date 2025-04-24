import Layout from "@/components/layout/layout"
import Event from "@/server/models/event"


const Users = ({}) => {
    return (
      <Layout >
        <p></p>
      </Layout>
    )
}


export async function getStaticProps() {
    const events = await Event.findAll()
    console.log(events)
    return { props: {  } }
  }

export default Users