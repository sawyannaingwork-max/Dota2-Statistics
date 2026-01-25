import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { MatchUps } from "../types"
import heroes from "./../helpers/heroes.json"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const heroList : Record<string , any> = heroes

export default function Matchup()
{
    // Getting the id of the hero
    const { id } = useParams()

    // Fetching data
    const { data:matchups, isFetching, isError } = useOpenDota<MatchUps[]>(`matchups${id}`, `https://api.opendota.com/api/heroes/${id}/matchups`)

    useGSAP(() => {
        gsap.from("#matchup-table", {
            opacity : 0,
            y : 20,
            duration : 0.6,
            ease : "sine"
        })
    }, [isFetching])

    if (isFetching)
    {
        return (
            <div className="w-[90%] max-w-[700px] mx-auto mt-5 animate-pulse">
                <table className="w-full text-text">
                    <thead>
                    <tr className="bg-[#3D3D43]">
                        <th className="py-1">Hero</th>
                        <th className="py-1">Total</th>
                        <th className="py-1">Win</th>
                        <th className="py-1">Win Rate</th>
                    </tr>
                    </thead>

                    <tbody>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <tr key={i} className="border-b border-gray-700/40">
                        {/* Hero icon */}
                        <td className="py-2">
                            <div className="w-8 h-8 mx-auto bg-gray-800 rounded" />
                        </td>

                        {/* Total */}
                        <td className="py-2">
                            <div className="h-4 w-12 mx-auto bg-gray-700 rounded" />
                        </td>

                        {/* Win */}
                        <td className="py-2">
                            <div className="h-4 w-12 mx-auto bg-gray-700 rounded" />
                        </td>

                        {/* Win Rate */}
                        <td className="py-2">
                            <div className="h-4 w-16 mx-auto bg-gray-700 rounded" />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return(
        <table id="matchup-table" className="w-[90%] max-w-[700px] mx-auto text-text mt-5">
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
                            <tr key={matchup.hero_id}>
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