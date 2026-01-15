import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota";
import type { ProMatch } from "../types";
import { Activity, createContext, useContext, useState } from "react";
import BasicInfo from "./../proMatchDetail/BasicInfo";
import OverView from "../proMatchDetail/OverView";
import Kill from "../proMatchDetail/Kills";
import Damage from "../proMatchDetail/Damage";

const proMatchContext = createContext<ProMatch | undefined>(undefined)

export default function ProMatchDetail()
{
    const { id } = useParams()
    const [status, setStatus] = useState<"overview" | "kill" | "damage">("overview")

    // Validating id
    let matchId : number = Number(id);
    
    if (!matchId)
    {
        return <h1>Invalid Id</h1>
    }

    // Fetching match data
    const { data : match, isFetching, isError } = useOpenDota<ProMatch>(`proMatchDetail${matchId}`, `https://api.opendota.com/api/matches/${matchId}`)

    if (isFetching)
    {
        return <p>Loading</p>
    }

    if (isError || !match)
    {
        return <p>Something went wrong! try again later.</p>
    }

    return(
        <proMatchContext.Provider value={match}>
            <div className="bg-background">
                <BasicInfo />
                <div className="mt-9 w-[90%] mx-auto flex border-2 border-text rounded-md">
                    <button onClick={() => setStatus("overview")} className={` rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "overview"? "bg-secondary text-text" : ""}`}>Overview</button>
                    <button onClick={() => setStatus("kill")} className={` rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "kill"? "bg-secondary text-text" : ""}`}>Kill</button>
                    <button onClick={() => setStatus("damage")} className={` rounded-md duration-150 font-itim  cursor-pointer hover:bg-secondary hover:text-text text-center px-2 text-secondary py-1 ${status === "damage"? "bg-secondary text-text" : ""}`}>Damage</button>
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