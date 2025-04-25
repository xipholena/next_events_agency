import Layout from "@/components/layout/layout"
import User from "@/server/models/user"

const Users = ({}) => {
    return (
      <Layout >
        <p></p>
      </Layout>
    )
}


export async function getStaticProps() {
    const users = await User.findAll()
    
    return { props: {  } }
  }

export default Users



