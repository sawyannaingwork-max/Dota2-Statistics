import { useProMatchContext } from "../components/ProMatchDetail"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import KillTable from "./KillTable"
import TeamProfile from "./TeamProfile"



export default function Kill()
{
    const data = useProMatchContext()

    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    const killRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!killRef.current)
        {
            return 
        }

        gsap.from(killRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6
        })
    }, { scope : killRef, dependencies : []})

    return(
        <div ref={killRef} className="w-[90%] mx-auto mt-9">
            <div>
                <TeamProfile 
                    team={data.radiant_team}
                    type = "Radiant"
                />
                <KillTable 
                    players={radiant}
                    enemies={dire}
                />
            </div>

            <div className="mt-9">
                <TeamProfile 
                    team={data.dire_team}
                    type = "Dire"
                />
                <KillTable 
                    players={dire}
                    enemies={radiant}
                />
            </div>
        </div>
    )
}