import heroes from "./../helpers/heroes.json"
import type { HeroAttribute } from "../types";
import type { Hero } from "../types";
import HeroCard from "./HeroCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

// Type of HeroList Props
interface HeroListProps {
    search : string,
    filter : HeroAttribute
}
export default function HeroList({search, filter} : HeroListProps)
{
    const heroListArr = Object.values(heroes) as Hero[];

    const containerRef = useRef<HTMLDivElement | null>(null)

    // Filtering heroes to show
    // Filter according to search
    let filteredHeroes = heroListArr?.filter(function(hero : Hero)
    {
        return hero.localized_name.toLowerCase().includes(search.toLowerCase())
    })

    // if filter is not null , filter according to filter xd
    if (filter)
    {
        filteredHeroes = filteredHeroes?.filter(function(hero : Hero)
        {
            return hero.primary_attr === filter
        })
    }


    useGSAP(() => {
        if (!containerRef.current)
        {
            return
        }
        
        gsap.from(containerRef.current, {
            y : 30,
            duration : 2,
            opacity : 0,
            delay : 2,
            ease : "elastic"
        })
    })

    // Show a list of hero
    return(
        <div ref={containerRef} className="overflow-x-hidden w-[90%] mx-auto mt-9 grid grid-cols-1 sm:justify-between sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {
                filteredHeroes?.map(function(hero)
                {
                    return (
                        <HeroCard 
                            key = {hero.id}
                            {...hero}
                        />
                    )
                })
            }
        </div>
    )
}