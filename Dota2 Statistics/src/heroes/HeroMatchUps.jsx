import useOpenDota from "../custom/useOpenDota"
import { useIdContext } from "./HeroDetail"

import { Atom } from "react-loading-indicators";

import heroes from "./../helpers/heroes.json"
import baseurl from "../helpers/baseurl";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

export default function HeroMatchUps()
{
    const id = useIdContext();
    const elementRef = useRef();
    const url = `https://api.opendota.com/api/heroes/${id}/matchups`

    const {data : matchups, isFetching, error} = useOpenDota(id, "Match Ups", url);

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

    }, [matchups])

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
    }, [matchups])

    if (isFetching)
    {
        return (
                <div className="flex justify-center items-center">
                    <Atom color="#a8d5a8" size="medium" text="" textColor="" />
                </div>
            )
    }

    if (error || !matchups)
    {
        <p className="text-primaryText font-heading">Something went wrong.Try again later</p>
    }

    return(
        <div ref={elementRef} className="py-9">
            <div className="grid grid-cols-4 p-2 bg-card rounded-md">
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Hero</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Total</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Win</h3>
                <h3 className="text-LevelFive font-heading text-primaryText text-center">Win Rate</h3>
            </div>
            <div className="grid-container">
                {
                    matchups.map(function(matchup)
                    {
                        return(
                            <section key={matchup.hero_id} className="grid grid-cols-4 p-2 rounded-md">
                                <img className="mx-auto" src={baseurl + heroes[matchup.hero_id].icon} alt={heroes[matchup.hero_id].localized_name} />
                                <p className="text-primaryText text-center">{matchup.games_played}</p>
                                <p className="text-primaryText text-center">{matchup.wins}</p>
                                <p className="text-primaryText text-center">
                                    {(matchup.wins / matchup.games_played * 100).toFixed(2)}%
                                </p>
                            </section>
                        )
                    })
                }
            </div>
        </div>
    )
}