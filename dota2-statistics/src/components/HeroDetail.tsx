import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import { createContext, useContext } from "react";
import type { HeroStats } from "../types";
import BasicInfo from "../heroDetail/BasicInfo";
import Facet from "../heroDetail/Facet";
import Innate from "../heroDetail/Innate";
import Abilities from "../heroDetail/Abilities";
import WinRate from "../heroDetail/WinRate";
import { useState, Activity } from "react";
import Items from "../heroDetail/Items";
import Matchup from "../heroDetail/Matchup";
import ProMatch from "../heroDetail/ProMatch";
import Loader from "./Loader";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

// Creating context
const statContext = createContext<HeroStats | undefined>(undefined)

export default function HeroDetail()
{
    const {id} = useParams<{id : string}>()

    const [status, setStatus] = useState<"winrate" | "items" | "matchup" | "promatches">("winrate")

    // Fetching hero Stats
    const { data: heroStats, isFetching, isError } = useOpenDota<HeroStats[]>("heroStats", "https://api.opendota.com/api/heroStats");

    // Adding animation 
    useGSAP(() => {
        gsap.from("#hero-detail-nav", {
            opacity : 0,
            y : 20,
            duration : 1,
            scrollTrigger : {
                trigger : "#hero-detail-nav",
                start : "bottom bottom"
            }
        })

        ScrollTrigger.refresh()

    }, [isFetching])

    if (isFetching)
    {
        return <Loader />
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    // Substracing stats for hero of id 
    const stats = heroStats?.find(function(hero)
    {
        return hero.id === Number(id);
    })
    
    if (!stats)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return(
        <statContext.Provider value={stats}>
            <div className="min-h-screen bg-background">
                <BasicInfo />
                <Facet />
                <Innate />
                <Abilities />
                <div id = "hero-detail-nav" className="w-[90%] max-w-125 mx-auto flex border-2 border-text mt-9 rounded-md">
                    <button onClick={() => setStatus("winrate")} className={`${status === "winrate"? "bg-secondary text-text" : ""} w-1/4 rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center text-secondary py-1`}>WinRate</button>
                    <button onClick={() => setStatus("items")} className={`${status === "items"? "bg-secondary text-text" : ""} w-1/4 rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center text-secondary py-1`}>Items</button>
                    <button onClick={() => setStatus("matchup")} className={`${status === "matchup"? "bg-secondary text-text" : ""} w-1/4 rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center text-secondary py-1`}>Mathch Up</button>
                    <button onClick={() => setStatus("promatches")} className={`${status === "promatches"? "bg-secondary text-text" : ""} w-1/4 rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center text-secondary py-1`}>Pro Matches</button>
                </div>
                <Activity mode={status === "winrate"? "visible" : "hidden"}>
                    <WinRate />
                </Activity>
                <Activity mode={status === "items"? "visible" : "hidden"}>
                    <Items />
                </Activity>
                <Activity mode={status === "matchup"? "visible" : "hidden"}>
                    <Matchup />
                </Activity>
                <Activity mode={status === "promatches"? "visible" : "hidden"}>
                    <ProMatch />
                </Activity>
            </div>
        </statContext.Provider>
    )
}

// for accessing statContext
export function useStatContext()
{
    const context = useContext(statContext)

    if (!context)
    {
        throw new Error("Error");
    }

    return context;
}