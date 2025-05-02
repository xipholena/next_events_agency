import Layout from "@/src/components/layout/layout"
import container from "@/server/di"
import { NextApiRequest, NextApiResponse } from "next"
import { createRouter } from "next-connect"


const Tags = ({tags}) => {
    return (
      <Layout >
        <p>{JSON.stringify(tags)}</p>
      </Layout>
    )
}


export async function getServerSideProps(context) {
  const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(container.resolve('TagsController').handleSSRGetAll)
    
  return router.run(context?.req, context?.res)
}

export default Tags