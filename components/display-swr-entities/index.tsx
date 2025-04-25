import { useEffect, useState } from "react"
import useSWREntities from "./hooks/use-entities"


const DisplayEntities = ({name}: {name:string}) => {
    const [isFetching, setIsFetching] = useState(false)
    const [entities, setEntities] = useState(null)
     const {data, error, isLoading} = useSWREntities({name, isFetching, setIsFetching})
     
     useEffect(() => {
        if(!isLoading) {
            setIsFetching(false)
        }
     }, [isLoading])

     useEffect(() => {
        data && setEntities(data)
     }, [data])
     
    return (
        <div className="max-w-1/4 overflow-x-auto">
            <button onClick={()=> setIsFetching(true)} className='px-4 py-2 rounded-lg bg-indigo-500 font-semibold text-white hover:cursor-pointer'>get all {name}</button>
            { isLoading ? 'Loading...' : ''}
                { entities 
                    ? JSON.stringify(entities) 
                    : 'No data'
                }

            {error ? 'Something went wrong...' : '' }
        </div>
        
    )
}

export default DisplayEntities