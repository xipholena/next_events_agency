import Layout from "@/src/components/layout/layout"
import { createRouteHandler } from "@/src/utils";
import { InferGetServerSidePropsType, NextApiRequest, NextApiResponse, GetServerSideProps } from "next";

const UserPage = ({user}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
      <Layout >
        <p>{JSON.stringify(user)}</p>
      </Layout>
    )
}


export const getServerSideProps = function(context) {
  console.log('context.params', context.params)
    return createRouteHandler(
      [
        {
          controllerName:'UsersController',
          method: 'GET'
        },
        {
          controllerName:'UsersController',
          method: 'GET'
        }
      ], 
      context,
      context.params
    )
} 
  
export default UserPage

/*satisfies GetServerSideProps<{ user: IUser }>
type ExtendedGetSSP = GetServerSideProps & {

}
*/