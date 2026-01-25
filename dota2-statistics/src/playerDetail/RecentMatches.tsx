import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerMatch } from "../types"
import Match from "./Match"
import Loader from "../components/Loader"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function RecentMatches()
{
    const { id } = useParams()
    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data : matches, isFetching, isError} = useOpenDota<PlayerMatch[]>(`Player Recent Matches ${id}`, `https://api.opendota.com/api/players/${id}/recentMatches`)

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
        return <Loader />
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later or.Perhap this account matches are set to private.</p>
    }

    return (
        <div ref={elementRef} className="w-[90%] mx-auto mt-9 overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-[#3D3D43] text-text">
                        <th className="py-1 min-w-[80px]">Hero</th>
                        <th className="py-1 min-w-[120px]">Average Rank</th>
                        <th className="py-1 min-w-[80px]">Result</th>
                        <th className="py-1 min-w-[80px]">K</th>
                        <th className="py-1 min-w-[80px]">D</th>
                        <th className="py-1 min-w-[80px]">A</th>
                        <th className="py-1 min-w-[80px]">GPM</th>
                        <th className="py-1 min-w-[80px]">XPM</th>
                        <th className="py-1 min-w-[120px]">Date</th>
                        <th className="py-1 min-w-[80px]">Duration</th>
                        <th className="py-1 min-w-[80px]">Game</th>
                        <th className="py-1 min-w-[80px]">Lobby</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map(function(match)
                        {
                            return(
                                <Match 
                                    key = {match.match_id}
                                    {...match}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}