import Layout from "@/src/components/layout/layout"
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import container from "@/server/di";

const ReviewPage = ({review}) => {
    return (
      <Layout >
        <p>{JSON.stringify(review)}</p>
      </Layout>
    )
}

export async function getServerSideProps(context) {
  context.req.contextParams = context.params;
  const router = createRouter<NextApiRequest, NextApiResponse>()
    .get(container.resolve('ReviewsController').handleSSRGetReview)
    
  return router.run(context?.req, context?.res)
}

export default ReviewPage