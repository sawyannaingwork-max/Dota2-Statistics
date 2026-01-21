import { Activity, useState } from "react"
import BasicInfo from "../playerDetail/BasicInfo"
import WinRate from "../playerDetail/WinRate"
import Heroes from "../playerDetail/Heroes"
import Matches from "../playerDetail/Matches"
import RecentMatches from "../playerDetail/RecentMatches"
import Peers from "../playerDetail/Peers"
import Pros from "../playerDetail/Pros"

export type statusType = "heroes" | "matches" | "recent" | "peers" | "pros"

export default function PlayerDetail()
{
    const [status, setStatus] = useState<statusType>("heroes")
    return (
        <div className="bg-background">
            <BasicInfo />
            <WinRate />
            <div className="flex border-2 border-text w-[90%] max-w-[1000px] mx-auto mt-9">
                <button onClick={() => setStatus("heroes")} className={`w-[20%] text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "heroes"? "bg-secondary text-text" : ""}`}>Heroes</button>
                <button onClick={() => setStatus("recent")} className={`w-[20%] text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "recent"? "bg-secondary text-text" : ""}`}>Recent Matches</button>
                <button onClick={() => setStatus("matches")} className={`w-[20%] text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "matches"? "bg-secondary text-text" : ""}`}>Matches</button>
                <button onClick={() => setStatus("peers")} className={`w-[20%] text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "peers"? "bg-secondary text-text" : ""}`}>Peers</button>
                <button onClick={() => setStatus("pros")} className={`w-[20%] text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "pros"? "bg-secondary text-text" : ""}`}>Pros</button>
            </div>
            <Activity mode={status === "heroes"? "visible" : "hidden"}>
                <Heroes />
            </Activity>
            <Activity mode={status === "recent"? "visible" : "hidden"}>
                <RecentMatches />
            </Activity>
            <Activity mode={status === "matches"? "visible" : "hidden"}>
                <Matches />
            </Activity>
            <Activity mode={status === "peers"? "visible" : "hidden"}>
                <Peers />
            </Activity>
            <Activity mode={status === "pros"? "visible" : "hidden"}>
                <Pros />
            </Activity>
        </div>
    )
}