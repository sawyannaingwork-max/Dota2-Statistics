import { useParams } from "react-router-dom";
import useOpenDota from "../custom/useOpenDota";
import Match from "./Match";
import type { PlayerMatch } from "../types";
import MatchSkeleton from "./MatchSkeleton"

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
                    <div className="w-[90%] animate-pulse mx-auto mt-9 overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-[#3D3D43] text-text">
                                <th className="z-10 sticky left-0 bg-[#3d3d43] py-1 min-w-20">Hero</th>
                                <th className="py-1 min-w-30">Average Rank</th>
                                <th className="py-1 min-w-20">Result</th>
                                <th className="py-1 min-w-20">K</th>
                                <th className="py-1 min-w-20">D</th>
                                <th className="py-1 min-w-20">A</th>
                                <th className="py-1 min-w-20">GPM</th>
                                <th className="py-1 min-w-20">XPM</th>
                                <th className="py-1 min-w-30">Date</th>
                                <th className="py-1 min-w-20">Duration</th>
                                <th className="py-1 min-w-20">Game</th>
                                <th className="py-1 min-w-20">Lobby</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({length : 7}).map((_, index)=> {
                                    return(
                                        <MatchSkeleton key={index} />
                                    )
                                })
                            }
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
                        <th className="py-1 min-w-20">Hero</th>
                        <th className="py-1 min-w-30">Average Rank</th>
                        <th className="py-1 min-w-20">Result</th>
                        <th className="py-1 min-w-20">K</th>
                        <th className="py-1 min-w-20">D</th>
                        <th className="py-1 min-w-20">A</th>
                        <th className="py-1 min-w-20">GPM</th>
                        <th className="py-1 min-w-20">XPM</th>
                        <th className="py-1 min-w-30">Date</th>
                        <th className="py-1 min-w-20">Duration</th>
                        <th className="py-1 min-w-20">Game</th>
                        <th className="py-1 min-w-20">Lobby</th>
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