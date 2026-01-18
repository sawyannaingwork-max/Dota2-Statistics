import BasicInfo from "../proTeamDetail/BasicInfo"
import Heroes from "../proTeamDetail/Heroes"
import Matches from "../proTeamDetail/Matches"
import Players from "../proTeamDetail/Players"
import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { ProTeam } from "../types"

export default function ProTeamDetail()
{

    const { id } = useParams()

    if (!id)
    {
        return <p>Invalid Usage.</p>
    }

    const { data, isFetching, isError} = useOpenDota<ProTeam>(`proteamDetail${id}`, `https://api.opendota.com/api/teams/${id}`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return (
        <div className="bg-background min-h-screen">
            <BasicInfo 
                {...data}
            />
            <Players />
            <Heroes />
            <Matches 
                logo_url = {data.logo_url}
                name = {data.name}
            />
        </div>
    )
}