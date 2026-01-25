import { useNavigate, useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerPro } from "../types"
import Loader from "../components/Loader"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Pros()
{
    const { id } = useParams()

    const navigate = useNavigate()
    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError} = useOpenDota<PlayerPro[]>(`Player Pros ${id}`, `https://api.opendota.com/api/players/${id}/pros`)

    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        gsap.from(elementRef.current, {
            opacity : 0,
            y : 30,
            duration : 0.6,
            ease : "sine"
        })
    }, { scope : elementRef, dependencies : [isFetching]})
    if (isFetching)
    {
        return (
            <div className="w-[90%] mx-auto overflow-x-auto mt-9 animate-pulse">
            <table className="min-w-full">
                <thead>
                <tr className="bg-[#3D3D43]">
                    {Array.from({ length: 8 }).map((_, i) => (
                    <th key={i} className="py-2 px-2">
                        <div className="h-4 w-24 bg-secondary/40 rounded" />
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 7 }).map((_, i) => (
                    <tr key={i}>
                    {/* Player */}
                    <td className="py-2 px-2">
                        <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-secondary/40 rounded" />
                        <div className="h-4 w-32 bg-secondary/40 rounded" />
                        </div>
                    </td>

                    {/* Team */}
                    <td className="py-2">
                        <div className="h-4 w-28 bg-secondary/40 rounded" />
                    </td>

                    {/* Total */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win Rate */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Games */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Win */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Win Rate */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
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
        return <p>Something went Wrong. Try again later. </p>
    }

    if (!data || data.length === 0)
    {
        return <p>None</p>
    }
    
    function handleClick(id : number | null)
    {
        if (!id)
        {
            return
        }

        navigate(`/team/${id}`)
    }
    return(
        <div ref={elementRef} className="w-[90%] mx-auto overflow-x-auto mt-9">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-[#3D3D43] text-text">
                        <th className="text-left px-1 py-1 min-w-[200px]">Player</th>
                        <th className="py-1 min-w-[150px]">Team</th>
                        <th className="py-1 min-w-[80px]">Total</th>
                        <th className="py-1 min-w-[80px]">Win</th>
                        <th className="py-1 min-w-[100px]">Win Rate</th>
                        <th className="py-1 min-w-[140px]">Against Games</th>
                        <th className="py-1 min-w-[140px]">Against Win</th>
                        <th className="py-1 min-w-[140px]">Against Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(function(player)
                        {
                            return(
                                <tr key={player.account_id}>
                                    <td className="py-1 px-1">
                                        <div className="flex gap-2 items-center">
                                            <img className="w-10" src={player.avatarfull} alt={player.name? player.name : "Anonymous"} />
                                            <h3 onClick={() => navigate(`/player/${player.account_id}`)} className="hover:underline font-itim text-accent cursor-pointer">{player.name? player.name : "Anonymous"}</h3>
                                        </div>
                                    </td>
                                    <td onClick={() => handleClick(player.team_id)} className={`py-1 text-teal-400 ${player.team_id? "hover:underline cursor-pointer" : ""}`}>{player.team_name ? player.team_name : "Unknown"}</td>
                                    <td className="py-1 text-center text-text">{player.games}</td>
                                    <td className="py-1 text-center text-green-400">{player.win}</td>
                                    <td className="py-1 text-center text-teal-400">{Math.trunc(player.win / player.games * 100 * 100) / 100}%</td>
                                    <td className="py-1 text-center text-red-400">{player.against_games}</td>
                                    <td className="py-1 text-center text-green-400">{player.against_win}</td>
                                    <td className="py-1 text-center text-teal-400">{Math.trunc(player.against_win / player.against_games * 100 * 100) / 100}%</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}