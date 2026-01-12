import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import { createContext, useContext } from "react";
import type { HeroStats } from "../types";
import BasicInfo from "../heroDetail/BasicInfo";
import Facet from "../heroDetail/Facet";
import Innate from "../heroDetail/Innate";
import Abilities from "../heroDetail/Abilities";

// Creating context
const statContext = createContext<HeroStats | undefined>(undefined)

export default function HeroDetail()
{
    const {id} = useParams<{id : string}>()

    // Fetching hero Stats
    const { data: heroStats, isFetching, isError } = useOpenDota<HeroStats[]>("heroStats", "https://api.opendota.com/api/heroStats");

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError)
    {
        return <p>Error</p>
    }

    // Substracing stats for hero of id 
    const stats = heroStats?.find(function(hero)
    {
        return hero.id === Number(id);
    })
    
    if (!stats)
    {
        return <p>Error</p>
    }

    return(
        <statContext.Provider value={stats}>
            <div className="bg-background">
                <BasicInfo />
                <Facet />
                <Innate />
                <Abilities />
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