import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota";
import type { ProMatch } from "../types";
import { Activity, createContext, useContext, useRef, useState } from "react";
import BasicInfo from "./../proMatchDetail/BasicInfo";
import OverView from "../proMatchDetail/OverView";
import Kill from "../proMatchDetail/Kills";
import Damage from "../proMatchDetail/Damage";
import Item from "../proMatchDetail/Item";
import Ability from "../proMatchDetail/Ability";
import Loader from "./Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MatchDetailSkeleton from "./MatchDetailSkeleton";

const proMatchContext = createContext<ProMatch | undefined>(undefined)

export default function ProMatchDetail()
{
    const { id } = useParams()
    const [status, setStatus] = useState<"overview" | "kill" | "damage" | "item" | "ability">("overview")
    const buttonContainerRef = useRef<HTMLDivElement | null>(null)
    
    // Fetching match data
    const { data : match, isFetching, isError } = useOpenDota<ProMatch>(`proMatchDetail${id}`, `https://api.opendota.com/api/matches/${id}`)

    useGSAP(() => {
        if (!buttonContainerRef)
        {
            return 
        }

        gsap.from(buttonContainerRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.5,
            ease : "sine"
        })
    }, { scope : buttonContainerRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <MatchDetailSkeleton />
    }

    if (isError || !match)
    {
        return <p>Something went wrong! try again later.</p>
    }

    return(
        <proMatchContext.Provider value={match}>
            <div className="bg-background">
                <BasicInfo />
                <div ref={buttonContainerRef} className="mt-9 w-[90%] max-w-[1000px] mx-auto flex border-2 border-text rounded-md">
                    <button onClick={() => setStatus("overview")} className={` rounded-md w-[20%] duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "overview"? "bg-secondary text-text" : ""}`}>Overview</button>
                    <button onClick={() => setStatus("kill")} className={` rounded-md w-[20%] duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "kill"? "bg-secondary text-text" : ""}`}>Kill</button>
                    <button onClick={() => setStatus("damage")} className={` rounded-md w-[20%] duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "damage"? "bg-secondary text-text" : ""}`}>Damage</button>
                    <button onClick={() => setStatus("item")} className={` rounded-md w-[20%] duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "item"? "bg-secondary text-text" : ""}`}>Item</button>
                    <button onClick={() => setStatus("ability")} className={` rounded-md w-[20%] duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "ability"? "bg-secondary text-text" : ""}`}>Ability</button>
                </div>
                <Activity mode={status === "overview"? "visible" : "hidden"}>
                    <OverView />
                </Activity>
                <Activity mode={status === "kill"? "visible" : "hidden"}>
                    <Kill />
                </Activity>
                <Activity mode={status === "damage"? "visible" : "hidden"}>
                    <Damage />
                </Activity>
                <Activity mode={status === "item"? "visible" : "hidden"}>
                    <Item />
                </Activity>
                <Activity mode={status === "ability"? "visible" : "hidden"}>
                    <Ability />
                </Activity>
            </div>
        </proMatchContext.Provider>
    )
}

export function useProMatchContext()
{
    const context = useContext(proMatchContext)

    if (!context)
    {
        throw new Error("This context should only be used for component which is inside ProMatchDetail")
    }

    return context
}