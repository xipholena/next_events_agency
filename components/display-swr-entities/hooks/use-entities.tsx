import { fetcher } from "@/utils"
import { useEffect } from "react";
import useSWR from "swr"
type Props = {
    name: string;
    isFetching: boolean, 
    setIsFetching: (boolean) => void;
}
const useSWREntities = ({name, isFetching, setIsFetching}: Props) => {
    const { data, error, isLoading } = useSWR(isFetching ? `/api/${name}/`: null, fetcher)
    
    return {
        data, error, isLoading
    }
}

export default useSWREntities


