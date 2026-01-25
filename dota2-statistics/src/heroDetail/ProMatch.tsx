import { useParams, useNavigate } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { HeroMatches } from "../types"
import Loader from "../components/Loader"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function ProMatch()
{
    const navigate = useNavigate()
    const { id } = useParams()

    const elementRef = useRef<HTMLDivElement | null>(null)

    // Fetcing data
    const { data : matches, isFetching, isError } = useOpenDota<HeroMatches[]>(`matches${id}`, `https://api.opendota.com/api/heroes/${id}/matches`)

    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        gsap.from(elementRef.current, {
            opacity : 0,
            y : 20,
            duration : 0.6,
            ease : "sine"
        })
    }, [isFetching])
    
    if (isFetching)
    {
        return (
            <div className="w-[90%] max-w-[1000px] mx-auto mt-5 animate-pulse">
            <table className="w-full">
                <thead>
                <tr>
                    <th className="text-text py-1 bg-[#3D3D43]">League</th>
                    <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">
                    Date
                    </th>
                    <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">
                    Duration
                    </th>
                    <th className="text-text py-1 bg-[#3D3D43]">Result</th>
                    <th className="text-text py-1 bg-[#3D3D43]">KDA</th>
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                    <tr key={i} className="border-b border-gray-700/40">
                    {/* League */}
                    <td className="py-2">
                        <div className="h-4 w-40 bg-gray-700 rounded" />
                    </td>

                    {/* Date */}
                    <td className="py-2 hidden md:table-cell">
                        <div className="h-4 w-24 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Duration */}
                    <td className="py-2 hidden md:table-cell">
                        <div className="h-4 w-16 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Result */}
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* KDA */}
                    <td className="py-2">
                        <div className="h-4 w-20 mx-auto bg-gray-700 rounded" />
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

    
    return (
        <div ref={elementRef} className="w-[90%] max-w-[1000px] mx-auto mt-5">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-text py-1 bg-[#3D3D43]">League</th>
                        <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">Date</th>
                        <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">Duration</th>
                        <th className="text-text py-1 bg-[#3D3D43]">Result</th>
                        <th className="text-text py-1 bg-[#3D3D43]">KDA</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        matches?.map(function(match)
                        {
                            // Calculating the result
                            let result;
                            
                            if ((match.radiant && match.radiant_win) || (!match.radiant && !match.radiant_win))
                            {
                                result = "Win"
                            }

                            else 
                            {
                                result = "Lost"
                            }

                            // Converting start time to date
                            const date = new Date(match.start_time * 1000)

                    
                            return (
                                <tr key={match.match_id} className="cursor-pointer border-2 border-transparent hover:border-accent" onClick={() => navigate(`/matches/pro/${match.match_id}`)}>
                                    <td className="py-1 text-text">{match.league_name}</td>
                                    <td className="py-1 hidden md:table-cell text-text text-center">{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</td>
                                    <td className="py-1 hidden md:table-cell text-text text-center">{Math.trunc(match.duration / 60)} : {String(match.duration % 60).padStart(2, "0")}</td>
                                    <td className="py-1 text-text text-center">{result}</td>
                                    <td className="py-1 text-green-500 text-center">{match.kills}/{match.deaths}/{match.assists}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}