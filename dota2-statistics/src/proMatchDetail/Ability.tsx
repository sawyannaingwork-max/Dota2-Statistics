import { useRef } from "react"
import { useProMatchContext } from "../components/ProMatchDetail"
import AbilityTable from "./AbilityTable"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

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
                <div className="flex gap-2 items-center">
                    {
                        data.radiant_team && data.radiant_team.logo_url && 
                        <img className="w-10" src={data.radiant_team.logo_url} alt={data.radiant_team.name? data.radiant_team.name : "Radiant"} />
                    }
                    <h3 className="text-text font-inter">{data.radiant_team?.name? data.radiant_team.name : "Radiant"}</h3>
                </div>

                {/* Table */}
                <AbilityTable 
                    players = {radiant}
                />
            </div>

            {/* For Dire */}
            <div className="mt-9 pb-5">
                <div className="flex gap-2 items-center">
                    {
                        data.dire_team && data.dire_team.logo_url && 
                        <img
                        className="w-10"
                        src={data.dire_team.logo_url}
                        alt={data.dire_team.name ? data.dire_team.name : "Dire"}
                        />
                    }
                    <h3 className="text-text font-inter">
                        {data.dire_team?.name ? data.dire_team.name : "Dire"}
                    </h3>
                </div>

                <AbilityTable 
                    players = {dire}
                />
            </div>
        </div>
    )
}