import { useRef } from "react"
import { useProMatchContext } from "../components/ProMatchDetail"
import AbilityTable from "./AbilityTable"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TeamProfile from "./TeamProfile"

export default function Ability()
{
    const data = useProMatchContext()
    const abilityRef = useRef<HTMLDivElement | null>(null)

    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    useGSAP(() => {
        if (!abilityRef.current)
        {
            return 
        }

        gsap.from(abilityRef.current, {
            opacity : 0,
            y : 20,
            duration : 0.6,
            ease : "sine"
        })
    }, {scope : abilityRef, dependencies : []})
    return (
        <div ref={abilityRef} className="w-[90%] mx-auto mt-9 ">

            {/* For Radiant */}
            <div>
                <TeamProfile 
                    team = {data.radiant_team}
                    type = "Radiant"
                />

                {/* Table */}
                <AbilityTable 
                    players = {radiant}
                />
            </div>

            {/* For Dire */}
            <div className="mt-9 pb-5">
                <TeamProfile 
                    team = {data.dire_team}
                    type = "Dire"
                />

                <AbilityTable 
                    players = {dire}
                />
            </div>
        </div>
    )
}