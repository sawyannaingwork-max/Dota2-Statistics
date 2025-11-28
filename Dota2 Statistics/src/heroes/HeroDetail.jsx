import { useParams } from "react-router-dom"
import { Activity, createContext, useContext, useEffect, useState, useRef } from "react"

import HeroInfo from "./HeroInfo"
import HeroInnate from "./HeroInnate";
import HeroFacet from "./HeroFacet";
import HeroAbility from "./HeroAbility";
import PopularItems from "./PopularItems";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroMatches from "./HeroMatches";
import HeroMatchUps from "./HeroMatchUps";
import HeroDuration from "./HeroDuration";

gsap.registerPlugin(ScrollTrigger)

// Creating context
const idContext = createContext();

export default function HeroDetail()
{
    const {id }= useParams()
    const [status, setStatus] = useState("items")
    const [isToggle, setIsToggle] = useState(false);
    const buttonListRef = useRef();
    
    useEffect(function()
    {
       window.scrollTo(0, 0)
    }, [])

    useGSAP(function()
    {
        gsap.from(buttonListRef.current, {
            opacity : 0,
            duration : 1,
            ease : "sine",
            scrollTrigger : {
                trigger : buttonListRef.current,
                start : "top 80%",
                end : "middle middle"
            }
        })
    })

    function handleClick(type)
    {
        setIsToggle(true);
        setStatus(type);
    }
    return(
        <idContext.Provider value={id}>
            <div className="w-[90%] max-w-[1000px] mx-auto">
                <HeroInfo />
                <HeroInnate />
                <HeroFacet />
                <HeroAbility />
                <div ref={buttonListRef} className="mt-9 grid grid-cols-4 border-2 border-primaryText rounded-md">
                    <button onClick={() => handleClick("items")} className={`text-primaryText rounded-md ${status === "items"? "bg-card py-2" : ""}`}>Popular Items</button>
                    <button onClick={() => handleClick("matches")} className={`text-primaryText rounded-md ${status === "matches"? "bg-card py-2": ""}`}>Matches</button>
                    <button onClick={() => handleClick("matchups")} className={`text-primaryText rounded-md ${status === "matchups"? "bg-card py-2" : ""}`}>Match Ups</button>
                    <button onClick={() => handleClick("duration")} className={`text-primaryText rounded-md ${status === "duration"? "bg-card py-2" : ""}`}>Duration</button>
                </div>
                <div>
                    <Activity mode={status === "items"? "visible" : "hidden"}>
                        <PopularItems
                            isToggle = {isToggle}
                        />
                    </Activity>

                    <Activity mode={status === "matches"? "visible" : "hidden"}>
                        <HeroMatches />
                    </Activity>

                    <Activity mode={status === "matchups"? "visible" : "hidden"}>
                        <HeroMatchUps />
                    </Activity>

                    <Activity mode={status === "duration"? "visible" : "hidden"}>
                        <HeroDuration />
                    </Activity>
                </div>
            </div>
        </idContext.Provider>
    )
}

// For using context value
export function useIdContext()
{
    return useContext(idContext);
}

