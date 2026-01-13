import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { MatchUps } from "../types"
import heroes from "./../helpers/heroes.json"

const heroList : Record<string , any> = heroes

export default function Matchup()
{
    // Getting the id of the hero
    const { id } = useParams()

    if (!id)
    {
        return <p>Invalid Id</p>
    }

    // Fetching data
    const { data:matchups, isFetching, isError } = useOpenDota<MatchUps[]>(`matchups${id}`, `https://api.opendota.com/api/heroes/${id}/matchups`)


    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return(
        <table className="w-[90%] mx-auto text-text mt-5">
            <thead>
                <tr className="bg-[#3D3D43]">
                    <th className="py-1">Hero</th>
                    <th className="py-1">Total</th>
                    <th className="py-1">Win</th>
                    <th className="py-1">Win Rate</th>
                </tr>
            </thead>

            <tbody>
                {
                    matchups?.map(function(matchup)
                    {
                        return(
                            <tr>
                                <td className="py-1">
                                    <img className="mx-auto" src={`https://cdn.cloudflare.steamstatic.com/${heroList[String(matchup.hero_id)].icon}`} alt={heroList[String(matchup.hero_id)].localized_name} />
                                </td>
                                <td className="text-center py-1">{matchup.games_played}</td>
                                <td className="text-center py-1">{matchup.wins}</td>
                                <td className="text-center py-1">{(matchup.wins / matchup.games_played * 100).toFixed(2)}%</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}