import Layout from '@/components/layout/layout'
import Card from '@/components/card'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import DisplayEntities from '@/components/display-entities'

export default function Home() {

    
   
    return (
        <Layout home>
            <div className="px-4">
                <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                <p className="text-gray-600">
                    Live like the stars in these luxurious Southern California
                    estates.
                </p>
            </div> 
            
            <div className="mt-6 px-4 sm:overflow-x-auto ">
                <div className="sm:flex  sm:-mx-2 sm:pb-8  sm:-mx-2 ">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            className="sm:max-w-sm sm:h-auto sm:w-full sm:flex-shrink-0 sm:px-2 lg:w-1/3"
                            key={item}
                        >
                            <Card />

                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
