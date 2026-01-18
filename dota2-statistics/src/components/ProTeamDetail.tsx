import BasicInfo from "../proTeamDetail/BasicInfo"
import Heroes from "../proTeamDetail/Heroes"
import Players from "../proTeamDetail/Players"

export default function ProTeamDetail()
{
    return (
        <div className="bg-background min-h-screen">
            <BasicInfo />
            <Players />
            <Heroes />
        </div>
    )
}