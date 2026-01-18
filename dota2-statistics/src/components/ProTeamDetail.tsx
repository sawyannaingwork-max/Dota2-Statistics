import BasicInfo from "../proTeamDetail/BasicInfo"
import Heroes from "../proTeamDetail/Heroes"
import Matches from "../proTeamDetail/Matches"
import Players from "../proTeamDetail/Players"
import { useLocation } from "react-router-dom"

export default function ProTeamDetail()
{

    const location = useLocation()

    const { logo_url, name } = location.state as { logo_url : string | null, name : string}
    return (
        <div className="bg-background min-h-screen">
            <BasicInfo />
            <Players />
            <Heroes />
            <Matches 
                logo_url = {logo_url}
                name = {name}
            />
        </div>
    )
}