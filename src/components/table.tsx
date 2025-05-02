import { EventType } from "@/server/models/event"
import { TagType } from "@/server/models/tag"
import Ticket, { TicketType } from "@/server/models/ticket"
import User, { UserType } from "@/server/models/user"
import { useState } from "react"

const Table = ({name}: {name: string}) => {
    type EntitiesType = UserType[] | EventType[] | TicketType[] | TagType[]
    const [content, setContent] = useState/*EntitiesType | null>*/(null)
    
    
    const handleFetch = () => {
        fetch(`/api/${name}/`).then(response=> {
           return response.json()
        }).then(json => {
            return setContent(json?.data)
        }).catch(err=> {
            console.log('err', err);
        })
    }
    return (
        <div className="max-w-1/8 overflow-x-auto">
            <button onClick={handleFetch} className='px-4 py-2 rounded-lg bg-indigo-500 font-semibold text-white hover:cursor-pointer'>get all {name}</button>
            {content ? JSON.stringify(content) : '' }
        </div>
    )
}

export default Table