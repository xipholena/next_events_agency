import Layout from "@/components/layout/layout"
import User from "@/server/models/user"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const UserPage = ({user}) => {
 console.log('user parsed', user && JSON.parse(user))
 
    return (
      <Layout >
        <p>{user}</p>
      </Layout>
    )
}



export async function getServerSideProps(context) {
  const { id } = context.params
  const router = createRouter<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const user = await User.findByPk(id);
    console.log('user in router', user);
    
    
    //return it now, so getServerSideProps can return result of it's call
    if (!user) {
      // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#notfound
      return { props: { notFound: true } };
    }
    //prepare only after check
    const preparedUser = JSON.stringify(user)

    return { props: { user: preparedUser } };
  })

  return router.run(context?.req, context?.res)
}
  

export default UserPage