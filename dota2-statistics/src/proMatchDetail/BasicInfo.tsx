import { useProMatchContext } from "../components/ProMatchDetail"
import type { Team } from "../types"

export default function BasicInfo()
{
    const data = useProMatchContext()

    // Deciding winner
    let winningTeam : Team | null
    let winnerTeam : string 

    if (data.radiant_win)
    {
        winningTeam = data.radiant_team
        winnerTeam = "Radiant"
    }

    else 
    {
        winningTeam = data.dire_team
        winnerTeam = "Dire"
    }

    return (
        <div className="w-[90%] mx-auto bg-background pt-9">
            <div className="flex gap-2 items-center">
                {
                    winningTeam && winningTeam.logo_url && 
                    <img className="w-10" src={winningTeam.logo_url} alt={winningTeam.name? winningTeam.name : winnerTeam} />
                }
                <h2 className="font-inter text-green-400">{winningTeam?.name? winningTeam.name : winnerTeam} Victory</h2>
            </div>
            <div className="mt-9 flex justify-between md:justify-start gap-5">
                <h3 className="text-text font-inter">{data.league.name}</h3>
                <h3 className="text-secondary font-inter">Duration: <span className="font-itim text-text">{String(Math.trunc(data.duration / 60)).padStart(2, "0")}:{String(data.dire_score % 60).padStart(2, "0")}</span></h3>
            </div>

            <div className="flex justify-between items-center mt-9 max-w-[600px] mx-auto">
                <div className="flex gap-5 items-center">
                    <div className="flex flex-col items-center gap-1">
                        {
                            data.radiant_team && data.radiant_team.logo_url && 
                            <img className="w-10" src={data.radiant_team.logo_url} alt={data.radiant_team.name? data.radiant_team.name : "Radiant"} />
                        }     
                        <h3 className="font-inter text-text font-normal">{data.radiant_team?.name? data.radiant_team.name : "Radiant"}</h3>    
                    </div>      
                    <span className="text-secondary font-itim text-xl">{data.radiant_score}</span>         
                </div>
                <h2 className="text-red-400 text-2xl font-itim font-bold">VS</h2>
                <div className="flex gap-5 items-center">
                    <span className="text-secondary font-itim text-xl">{data.dire_score}</span>
                    <div className="flex flex-col items-center gap-1">
                        {
                            data.dire_team && data.dire_team.logo_url && 
                            <img className="w-10" src={data.dire_team.logo_url} alt={data.dire_team.name? data.dire_team.name : "Radiant"} />
                        }     
                        <h3 className="font-inter text-text font-normal">{data.dire_team?.name? data.dire_team.name : "Radiant"}</h3>    
                    </div>      
                             
                </div>
            </div>
        </div>
    )
}