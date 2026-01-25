import type { Rank } from "../components/PublicMatches"
import type { PublicMatch } from "../types"
import useOpenDota from "../custom/useOpenDota"
import MatchCard from "./MatchCard"
import Loader from "../components/Loader"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Matches({rank} : {rank : Rank})
{
    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data : matches, isFetching, isError } = useOpenDota<PublicMatch[]>("publicMatchees", "https://api.opendota.com/api/publicMatches")

    useGSAP(() => {
        if (!elementRef.current)
        {
            return
        }

        gsap.from(elementRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })
    }, {scope : elementRef, dependencies : [isFetching, rank]})
    if (isFetching)
    {
        return (
            <div className="border-2 border-text rounded-md mb-5 px-2 py-2 animate-pulse">
            {/* Top row */}
            <div className="mb-1 flex justify-between">
                <div className="h-4 w-28 bg-gray-700 rounded" />
                <div className="h-4 w-32 bg-gray-700 rounded" />
            </div>

            {/* Second row */}
            <div className="mb-2 flex justify-between">
                <div className="h-4 w-44 bg-gray-700 rounded" />
                <div className="h-4 w-28 bg-gray-700 rounded" />
            </div>

            {/* Teams */}
            <div className="flex justify-center items-center gap-5">
                {/* Radiant */}
                <div className="flex gap-1 flex-wrap justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                    key={i}
                    className="w-7 h-7 bg-gray-800 rounded"
                    />
                ))}
                </div>

                {/* VS */}
                <div className="h-6 w-8 bg-gray-700 rounded" />

                {/* Dire */}
                <div className="flex gap-1 flex-wrap justify-center">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                    key={i}
                    className="w-7 h-7 bg-gray-800 rounded"
                    />
                ))}
                </div>
            </div>
            </div>
        )
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    let rankTier;

    
    switch (rank)
    {
        case "hearld":
            rankTier = 1
            break; 
        
        case "guardian":
            rankTier = 2
            break;
        
        case "crusader":
            rankTier = 3
            break;

        case "archon":
            rankTier = 4
            break;

        case "legend":
            rankTier = 5
            break;

        case "ancient":
            rankTier = 6
            break;

        case "divine":
            rankTier = 7
            break;

        default:
            rankTier = 0
    }

    let matchArr;

    if (rankTier)
    {
        matchArr = matches.map(function(match)
        {
            if (Math.floor(match.avg_rank_tier / 10) === rankTier)
            {
                return(
                    <MatchCard 
                        key = {match.match_id}
                        {...match}
                    />
                )
            }
        })
    }

    else 
    {
        matchArr = matches.map(function(match)
        {
            return(
                <MatchCard 
                    key = {match.match_id}
                    {...match}
                />
            )
        })
    }

    return(
        <div ref={elementRef} className="w-[90%] mx-auto pb-5 mt-9">
            {matchArr}
        </div>
    )

}