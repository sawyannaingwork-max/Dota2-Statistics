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
        return (
            <div className="pt-9 w-[90%] mx-auto animate-pulse">

            {/* ===== Team name ===== */}
            <div className="h-7 w-48 mx-auto bg-gray-700 rounded" />

            {/* ===== Team logo ===== */}
            <div className="w-40 h-40 mx-auto mt-5 bg-gray-700 rounded-md" />

            {/* ===== Table ===== */}
            <table className="w-full max-w-100 mx-auto text-center mt-5">
                <tbody>
                {Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i}>
                    <th className="py-2">
                        <div className="h-4 w-24 mx-auto bg-gray-700 rounded" />
                    </th>
                    <td>
                        <div className="h-4 w-16 mx-auto bg-gray-700 rounded" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            </div>
        )
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