import Layout from "@/src/components/layout/layout"
import { GetServerSidePropsContext} from "next";
import { createRouteHandler } from "@/src/utils";

const Users = ({users}) => {
    return (
      <Layout >
        <p>{JSON.stringify(users)}</p>
      </Layout>
    )
}

//route from fs
export async function getServerSideProps(context: GetServerSidePropsContext) {
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
    {isNextPage: true}
  )
}

export default Users

/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return createRouteHandler('UsersController', 'handleSSRGetAll', 'get', context)
}

*/

