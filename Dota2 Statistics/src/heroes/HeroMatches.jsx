import { useIdContext } from "./HeroDetail"
import { useEffect, useRef } from "react";
import useOpenDota from "../custom/useOpenDota";

import { Atom } from "react-loading-indicators";

import HeroMatch from "./HeroMatch";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function HeroMatches()
{
    const id = useIdContext();
    const elementRef = useRef();

    const url = `https://api.opendota.com/api/heroes/${id}/matches`

    const {data: matches, isFetching, error} = useOpenDota(id, "Matches", url);

    useEffect(function()
    {
        if (!elementRef.current)
        {
            return;
        }

        window.scrollTo({
            top : elementRef.current.offsetTop - 70,
            behavior : "smooth"
        })
    }, [matches])

    useGSAP(function()
    {
        if (!elementRef.current)
        {
            return;
        }

        gsap.from(elementRef.current, {
            opacity : 0,
            duration : 2,
            ease : "sine"
        })

    }, [matches])

    if (isFetching)
    {
        return (
            <div className="flex justify-center items-center">
                <Atom color="#a8d5a8" size="medium" text="" textColor="" />
            </div>
        )
    }

    if (error)
    {
        return <p className="text-primaryText font-heading">Something went wrong.Try again later</p>
    }

    return(
        <div ref={elementRef} className="py-9">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] p-2 bg-card  text-center rounded-md md:grid-cols-4">
                <h3 className="text-LevelFive text-primaryText text-left">League Name</h3>
                <h3 className="text-LevelFive text-primaryText">Result</h3>
                <h3 className="text-LevelFive text-primaryText">Duration</h3>
                <h3 className="text-LevelFive text-primaryText text-right">K/D/A</h3>
            </div>
            <div className="grid-container">
                {
                    matches.map(function(match)
                    {
                        return (
                            <HeroMatch 
                                key = {match.match_id}
                                {...match}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}