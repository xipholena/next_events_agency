import Ticket from "@/server/models/ticket"
import User from "@/server/models/user"
import Event from "@/server/models/user"
import { useState } from "react"

const Table = ({name}: {name: string}) => {
    const [content, setContent] = useState<User[] | Event[] | Ticket[] | null>(null)
    const handleFetch = async() => {
        const response = await fetch(`/api/${name}/`)
        const data = await response.json()
        setContent(data?.[name])
    }
    return (
        <div className="max-w-1/4 overflow-x-auto">
            <button onClick={handleFetch} className='px-4 py-2 rounded-lg bg-indigo-500 font-semibold text-white hover:cursor-pointer'>get all {name}</button>
            {content ? JSON.stringify(content) : '' }
        </div>
    )
}

export default Table