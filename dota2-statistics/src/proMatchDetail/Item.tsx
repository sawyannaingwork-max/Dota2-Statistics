import { useProMatchContext } from "../components/ProMatchDetail"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ItemTable from "./ItemTable"
import TeamProfile from "./TeamProfile"


export default function Item()
{

    const data = useProMatchContext()
    const itemRef = useRef<HTMLDivElement | null>(null)

    // Divding team
    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    useGSAP(() => {
        if (!itemRef.current)
        {
            return 
        }

        gsap.from(itemRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })

    }, { scope : itemRef, dependencies : []})

    return(
        <div ref={itemRef} className="mt-9 w-[90%] mx-auto">

            {/* For Radiant */}
            <div>
                <TeamProfile 
                    team = {data.radiant_team}
                    type="Radiant"
                />

                <ItemTable 
                    players={radiant}
                />
            </div>

            {/* For Dire */}
            <div className="mt-9">
                <TeamProfile 
                    team = {data.dire_team}
                    type="Dire"
                />

                <ItemTable 
                    players={dire}
                />
            </div>

        </div>
    )
}