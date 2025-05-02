import Layout from "@/src/components/layout/layout"
import container from "@/server/di"
import { NextApiRequest, NextApiResponse } from "next"
import { createRouter } from "next-connect"


const Reviews = ({reviews}) => {
    return (
      <Layout >
        <p>{JSON.stringify(reviews)}</p>
      </Layout>
    )
}


export async function getServerSideProps(context) {
  const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(container.resolve('ReviewsController').handleSSRGetAll)
    
  return router.run(context?.req, context?.res)
}

export default Reviews