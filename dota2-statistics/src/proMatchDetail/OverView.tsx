import { useProMatchContext } from "../components/ProMatchDetail"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import OverViewTable from "./OverviewTable"
import TeamProfile from "./TeamProfile"

export default function OverView()
{
    const data = useProMatchContext()

    const players = data.players

    const radiantPlayers = players.slice(0, 5)
    const direPlayers = players.slice(5)
    const overviewRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!overviewRef.current)
        {
            return
        }

        gsap.from(overviewRef.current, {
            opacity : 0,
            y : 20,
            duration : 0.6,
            ease : "sine"
        })
    }, {scope : overviewRef, dependencies : []})
    return (
        <div ref={overviewRef} className="w-[90%] mx-auto mt-9 pb-5">
            <div>
                <TeamProfile 
                    team={data.radiant_team}
                    type="Radiant"
                />
                    
                <OverViewTable
                    players={radiantPlayers}
                />
            </div>

            <div className="mt-9">
                <TeamProfile 
                    team={data.dire_team}
                    type="Dire"
                />

                <OverViewTable 
                    players={direPlayers}
                />
   
            </div>
        </div>
    )
}