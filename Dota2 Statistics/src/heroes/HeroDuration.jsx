import useOpenDota from "../custom/useOpenDota"
import { useIdContext } from "./HeroDetail"

import { Atom } from "react-loading-indicators";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function HeroDuration()
{
    const id = useIdContext();
    const elementRef = useRef();
    const url = `https://api.opendota.com/api/heroes/${id}/durations`

    const {data : durations, isFetching, error} = useOpenDota(id, "Durations", url);

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

    }, [durations])

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
    }, [durations])

    if (isFetching)
    {
        return (
                <div className="flex justify-center items-center">
                    <Atom color="#a8d5a8" size="medium" text="" textColor="" />
                </div>
            )
    }

    if (error || !durations)
    {
        <p className="text-primaryText font-heading">Something went wrong.Try again later</p>
    }

    return(
        <div ref={elementRef} className="py-9">
            <div className="grid grid-cols-4 p-2 bg-card rounded-md">
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Duration</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Total</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Win</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Win Rate</h3>
            </div>
            <div className="grid-container">
                {
                    durations.map(function(duration)
                    {
                        return(
                            <section key={duration.hero_id} className="grid grid-cols-4 p-2 rounded-md">
                                <p className="text-primaryText text-center">{String(Math.floor(duration.duration_bin / 60)).padStart(2, 0)}:{String(duration.duration_bin % 60).padStart(2, 0)}</p>
                                <p className="text-primaryText text-center">{duration.games_played}</p>
                                <p className="text-primaryText text-center">{duration.wins}</p>
                                <p className="text-primaryText text-center">
                                    {(duration.wins / duration.games_played * 100).toFixed(2)}%
                                </p>
                            </section>
                        )
                    })
                }
            </div>
        </div>
    )
}