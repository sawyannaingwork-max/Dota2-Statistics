import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { PlayerWinRate } from "../types";
import Loader from "../components/Loader";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WinRate()
{
    const { id } = useParams()
    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError } = useQuery<PlayerWinRate>(
        {
            queryKey : ["player win rate", id],
            queryFn : async function()
            {
                try 
                {
                    const response = await fetch(`https://api.opendota.com/api/players/${id}/wl`)

                    if (!response.ok)
                    {
                        throw new Error("Something went wrong.")
                    }

                    const result = await response.json()

                    return result
                }

                catch(error)
                {
                    console.log(error)
                }
            },
            enabled : Boolean(id),
            staleTime : Infinity
        }
    )

    useGSAP(() => {
        gsap.from(".win-stats", {
            delay : 1,
            opacity : 0,
            y : -20,
            duration : 0.6,
            stagger : {
                each : 0.2,
                from : "edges"
            }
        })
    }, { scope : elementRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <Loader />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return(
        <div ref={elementRef} className="flex justify-between items-center w-[90%] mx-auto max-w-[1000px] mt-9">
            <div className="win-stats flex flex-col gap-1 items-center">
                <h2 className="text-secondary font-inter">Wins</h2>
                <p className="text-text font-itim">{data.win}</p>
            </div>
            <div className="win-stats flex flex-col gap-1 items-center">
                <h2 className="text-secondary font-inter">Losses</h2>
                <p className="text-text font-itim">{data.lose}</p>
            </div>
            <div className="win-stats flex flex-col gap-1 items-center">
                <h2 className="text-secondary font-inter">Win Rate</h2>
                <p className="text-text font-itim">{Math.trunc((data.win / (data.win + data.lose) * 100) * 100) / 100}%</p>
            </div> 
        </div>
    )
}