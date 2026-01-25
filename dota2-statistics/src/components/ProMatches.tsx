import useOpenDota from "../custom/useOpenDota"
import type { ProTeamMatch } from "../types"
import Match from "./../proMatches/Match"
import Loader from "./Loader"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)


export default function ProMatches()
{
    const { data : matches, isFetching, isError } = useOpenDota<ProTeamMatch[]>("promatches", "https://api.opendota.com/api/proMatches")

    const elementRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!elementRef.current)
        {
            return
        }

        const matches : HTMLElement[] = gsap.utils.toArray(elementRef.current.children)

        matches.forEach(match => {
            gsap.from(match, {
                opacity : 0,
                x : -20,
                duration : 1,
                ease : "sine",
                scrollTrigger : {
                    trigger : match,
                    start : "bottom bottom"
                }
            })
        })
    }, {scope : elementRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return (
            <>
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                    key={i}
                    className="mb-5 w-[90%] mx-auto border-2 border-text rounded-sm px-2 py-2 animate-pulse"
                    >
                    {/* League name */}
                    <div className="h-6 w-64 bg-gray-700 rounded mb-2" />

                    {/* Victory + date */}
                    <div className="flex justify-between items-center mb-3">
                        <div className="h-4 w-40 bg-gray-700 rounded" />
                        <div className="h-4 w-32 bg-gray-700 rounded" />
                    </div>

                    {/* Score row */}
                    <div className="flex justify-center gap-5 items-center">
                        {/* Radiant */}
                        <div className="flex gap-4 items-center">
                        <div className="h-4 w-24 bg-gray-700 rounded" />
                        <div className="h-6 w-8 bg-gray-700 rounded" />
                        </div>

                        {/* VS */}
                        <div className="h-6 w-8 bg-gray-700 rounded" />

                        {/* Dire */}
                        <div className="flex gap-4 items-center">
                        <div className="h-6 w-8 bg-gray-700 rounded" />
                        <div className="h-4 w-24 bg-gray-700 rounded" />
                        </div>
                    </div>
                    </div>
                ))}
            </>
        )
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.</p>
    }
    
    // Match compo arr
    const matchesArr = matches.map(function(match)
    {
        return (
            <Match
                key = {match.match_id}
                {...match}
            />
        )
    })

    return(
        <div ref={elementRef} className="bg-background py-9">
            {matchesArr}
        </div>
    )
}