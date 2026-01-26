import type { Rank } from "../components/PublicMatches"
import type { PublicMatch } from "../types"
import useOpenDota from "../custom/useOpenDota"
import MatchCard from "./MatchCard"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import MatchSkeleton from "./MatchSkeleton"

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
            <div className="w-[90%] mx-auto pb-5 mt-9 animate-pulse">
                {
                    Array.from({length : 7}).map((_, index) => {
                        return(
                            <MatchSkeleton key={index} />
                        )
                    })
                }
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