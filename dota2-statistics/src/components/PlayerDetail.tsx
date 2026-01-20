import { Activity, useState } from "react"
import BasicInfo from "../playerDetail/BasicInfo"
import WinRate from "../playerDetail/WinRate"
import Heroes from "../playerDetail/Heroes"

export type statusType = "heroes" | "matches"

export default function PlayerDetail()
{
    const [status, setStatus] = useState<statusType>("heroes")
    return (
        <div className="bg-background">
            <BasicInfo />
            <WinRate />
            <div className="flex border-2 border-text w-[90%] mx-auto mt-9">
                <button onClick={() => setStatus("heroes")} className={`text-secondary hover:bg-secondary hover:text-text font-itim py-1 cursor-pointer ${status === "heroes"? "bg-background text-text" : ""}`}>Heroes</button>
            </div>
            <Activity mode={status === "heroes"? "visible" : "hidden"}>
                <Heroes />
            </Activity>
        </div>
    )
}