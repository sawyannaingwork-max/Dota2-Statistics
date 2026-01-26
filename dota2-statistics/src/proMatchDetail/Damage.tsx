import { useRef } from "react"
import { useProMatchContext } from "../components/ProMatchDetail"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import DamageTable from "./DamageTable"
import TeamProfile from "./TeamProfile"



export default function Damage()
{
    const data = useProMatchContext()
    const damageRef = useRef<HTMLDivElement | null>(null)

    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    useGSAP(() => {
        if (!damageRef.current)
        {
            return 
        }

        gsap.from(damageRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })
    }, { scope : damageRef, dependencies : []})


    return (
        <div ref={damageRef} className="w-[90%] mx-auto mt-9 pb-5">
            <div>
                <TeamProfile 
                    team = {data.radiant_team}
                    type = "Radiant"
                />
                
                <DamageTable 
                    players = {radiant}
                    enemies={dire}
                />
                
            </div>

            <div className="mt-9">
                <TeamProfile 
                    team = {data.dire_team}
                    type = "Dire"
                />
                
                <DamageTable 
                    players={dire}
                    enemies={radiant}
                />
            </div>
        </div>
    )
}