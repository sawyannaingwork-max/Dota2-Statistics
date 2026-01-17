import { createContext, useContext } from "react"
import useOpenDota from "../custom/useOpenDota"
import { useParams } from "react-router-dom"
import type { PublicMatchDetailType } from "../types"
import BasicInfo from "./../publicMatchDetail/BasicInfo"
import OverView from "../publicMatchDetail/Data"

// Creating contexnt
const publicMatchContext = createContext<PublicMatchDetailType | undefined>(undefined)

export default function PublicMatchDetail()
{
    const { id } = useParams()

    if (!id)
    {
        return <p>Something went wrong. Try Again Later.</p>
    }

    const { data , isFetching, isError } = useOpenDota<PublicMatchDetailType>(`publicMatchDetail${id}`, `https://api.opendota.com/api/matches/${id}`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }

    return (
        <publicMatchContext.Provider value={data}>
            <div className="bg-background">
                <BasicInfo />
                <OverView />
            </div>
        </publicMatchContext.Provider> 
    )
}

export function usePublicMatchContext()
{
    const context = useContext(publicMatchContext)

    if (!context)
    {
        throw new Error("This context must be used inside the public match detail.")
    }

    return context
}