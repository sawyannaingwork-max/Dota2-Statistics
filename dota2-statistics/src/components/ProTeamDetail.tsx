import BasicInfo from "../proTeamDetail/BasicInfo"
import Heroes from "../proTeamDetail/Heroes"
import Players from "../proTeamDetail/Players"
import { useLocation } from "react-router-dom"

export default function ProTeamDetail()
{

    const { state } = useLocation()

    console.log(state)
    return (
        <div className="bg-background min-h-screen">
            <BasicInfo />
            <Players />
            <Heroes />
        </div>
    )
}