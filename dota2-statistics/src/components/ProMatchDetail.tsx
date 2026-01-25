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
        return (
            <div className="animate-pulse">

            {/* ================= Winner Section ================= */}
            <div className="w-[90%] mx-auto bg-background pt-9">
                <div className="flex gap-2 items-center">
                <div className="w-10 h-10 bg-gray-700 rounded" />
                <div className="h-5 w-48 bg-gray-700 rounded" />
                </div>

                <div className="mt-9 flex justify-between md:justify-start gap-5">
                <div className="h-5 w-56 bg-gray-700 rounded" />
                <div className="h-5 w-40 bg-gray-700 rounded" />
                </div>

                <div className="flex justify-between items-center mt-9 max-w-[600px] mx-auto">
                <div className="flex gap-5 items-center">
                    <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-gray-700 rounded" />
                    <div className="h-4 w-24 bg-gray-700 rounded" />
                    </div>
                    <div className="h-6 w-8 bg-gray-700 rounded" />
                </div>

                <div className="h-6 w-10 bg-gray-700 rounded" />

                <div className="flex gap-5 items-center">
                    <div className="h-6 w-8 bg-gray-700 rounded" />
                    <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-gray-700 rounded" />
                    <div className="h-4 w-24 bg-gray-700 rounded" />
                    </div>
                </div>
                </div>
            </div>

            {/* ================= Status Buttons ================= */}
            <div className="mt-9 w-[90%] max-w-[1000px] mx-auto flex border-2 border-text rounded-md">
                {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="w-[20%] py-1 px-2"
                >
                    <div className="h-6 w-full bg-gray-700 rounded" />
                </div>
                ))}
            </div>

            {/* ================= Overview Tables ================= */}
            <div className="w-[90%] mx-auto mt-9 pb-5">

                {/* -------- Radiant -------- */}
                <div>
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded" />
                    <div className="h-5 w-32 bg-gray-700 rounded" />
                </div>

                <div className="overflow-x-auto relative mt-5">
                    <table className="min-w-max w-full border-collapse">
                    <thead>
                        <tr className="bg-[#3D3D43]">
                        <th className="py-1 sticky left-0 z-20 min-w-[220px] bg-[#3d3d43]">
                            <div className="h-4 w-24 bg-gray-600 rounded mx-auto" />
                        </th>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <th key={i} className="py-1 min-w-[90px]">
                            <div className="h-4 w-16 bg-gray-600 rounded mx-auto" />
                            </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 5 }).map((_, row) => (
                        <tr key={row}>
                            <td className="py-1 sticky left-0 z-10 min-w-[220px]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-700 rounded" />
                                <div className="h-4 w-32 bg-gray-700 rounded" />
                            </div>
                            </td>

                            {Array.from({ length: 8 }).map((_, col) => (
                            <td key={col} className="py-1 min-w-[90px]">
                                <div className="h-4 w-10 bg-gray-700 rounded mx-auto" />
                            </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

                {/* -------- Dire -------- */}
                <div className="mt-9">
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded" />
                    <div className="h-5 w-32 bg-gray-700 rounded" />
                </div>

                <div className="overflow-x-auto relative mt-5">
                    <table className="min-w-max w-full border-collapse">
                    <thead>
                        <tr className="bg-[#3D3D43]">
                        <th className="py-1 sticky left-0 z-20 min-w-[220px] bg-[#3d3d43]">
                            <div className="h-4 w-24 bg-gray-600 rounded mx-auto" />
                        </th>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <th key={i} className="py-1 min-w-[90px]">
                            <div className="h-4 w-16 bg-gray-600 rounded mx-auto" />
                            </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 5 }).map((_, row) => (
                        <tr key={row}>
                            <td className="py-1 sticky left-0 z-10 min-w-[220px]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-700 rounded" />
                                <div className="h-4 w-32 bg-gray-700 rounded" />
                            </div>
                            </td>

                            {Array.from({ length: 8 }).map((_, col) => (
                            <td key={col} className="py-1 min-w-[90px]">
                                <div className="h-4 w-10 bg-gray-700 rounded mx-auto" />
                            </td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

            </div>
            </div>
        )
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