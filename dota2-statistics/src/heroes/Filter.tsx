import type { HeroAttribute } from "./../types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


interface FilterProps {
    search: string;
    setSearch: (value: string) => void;
    filter: HeroAttribute;
    setFilter: (value: HeroAttribute) => void;
}

export default function Filter({search, setSearch, filter, setFilter}: FilterProps) {
    function handleClick(attribute : 'agi' | 'str' | 'int' | 'all')
    {
        if (attribute === filter)
        {
            setFilter(null);
            return
        }

        setFilter(attribute)
    }

    const timeline = gsap.timeline()
    const containerRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        timeline.from("#filter-hero", {
            width : 0,
            duration : 1,
            opacity : 0,
        })

        timeline.from(".filter-btn", {
            opacity : 0,
            y : -20,
            stagger : 0.2
        })
    }, {scope : containerRef, dependencies : []})
    
    return (
        <div ref={containerRef} className="pt-9 sticky top-15 z-10 bg-background">
            <input 
                type="text" 
                placeholder="Search for a hero" 
                className="border-2 border-text rounded-sm w-[90%] mx-auto block px-2 py-1 text-text outline-none"
                value = {search}
                onChange={(e) => setSearch(e.target.value)}
                id = "filter-hero"
            />
            <div className="flex gap-2 w-[90%] mx-auto pt-6">
                <button onClick={() => handleClick("all")} className={`filter-btn ${filter === "all"? "active-btn" : ""}`}>Universal</button>
                <button onClick={() => handleClick("str")} className={`filter-btn ${filter === "str"? "active-btn" : ""}`}>Strength</button>
                <button onClick={() => handleClick("agi")} className={`filter-btn ${filter === "agi"? "active-btn" : ""}`}>Agility</button>
                <button onClick={() => handleClick("int")} className={`filter-btn ${filter === "int"? "active-btn" : ""}`}>Intelligence</button>
            </div>
        </div>
    )
}