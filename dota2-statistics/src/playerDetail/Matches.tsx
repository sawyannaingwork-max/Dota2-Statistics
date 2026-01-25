import { useParams } from "react-router-dom";
import useOpenDota from "../custom/useOpenDota";
import Match from "./Match";
import type { PlayerMatch } from "../types";
import Loader from "../components/Loader";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Matches()
{
    const { id } = useParams()

    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data : matches, isFetching, isError} = useOpenDota<PlayerMatch[]>(`Player Matches ${id}`, `https://api.opendota.com/api/players/${id}/matches`)

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
            <div className="w-[90%] mx-auto mt-9 overflow-x-auto">
                <table className="min-w-full">
                    <tbody>
                        {Array.from({ length: 7 }).map((_, i) => (
                            <tr key={i} className="animate-pulse">
                            {/* Hero icon */}
                            <td className="py-2">
                                <div className="w-10 h-6 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Avg Rank */}
                            <td className="py-2">
                                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Result */}
                            <td className="py-2">
                                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* K */}
                            <td className="py-2">
                                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* D */}
                            <td className="py-2">
                                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* A */}
                            <td className="py-2">
                                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* GPM */}
                            <td className="py-2">
                                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* XPM */}
                            <td className="py-2">
                                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Date */}
                            <td className="py-2">
                                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Duration */}
                            <td className="py-2">
                                <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Game Mode */}
                            <td className="py-2">
                                <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                            </td>

                            {/* Lobby */}
                            <td className="py-2">
                                <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.Perhap this account is set to private.</p>
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