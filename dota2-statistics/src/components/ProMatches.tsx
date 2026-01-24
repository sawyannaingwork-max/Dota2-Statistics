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
        return <Loader />
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