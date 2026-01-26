import type { Team } from "../types";

export default function TeamProfile({team, type} : {team : Team | null, type : string})
{
    return(
        <div className="flex gap-2 items-center">
            {
                team && team.logo_url && 
                <img className="w-10" src={team.logo_url} alt={team.name? team.name : "Radiant"} />
            }
            <h3 className="text-text font-inter">{team?.name? team.name : type}</h3>
        </div>
    )
}