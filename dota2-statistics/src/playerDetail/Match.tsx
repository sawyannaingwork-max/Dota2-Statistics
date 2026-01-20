import type { PlayerMatch } from "../types";
import { useNavigate } from "react-router-dom";

import heroes from "../helpers/heroes.json"
import lobbies from "../helpers/lobby_type.json"
import gameModes from "../helpers/game_mode.json"


const heroList : Record<string, any> = heroes 
const lobbyList : Record<string, any> = lobbies
const gameModeList : Record<string, any> = gameModes


export default function(props : PlayerMatch)
{
    const navigate = useNavigate()

    const ranks = ["Hearld", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"]
    // Calculating rank
    let averageRank : string 

    if (props.average_rank)
    {
        console.log(Math.trunc(props.average_rank / 10))
        if (Math.trunc(props.average_rank / 10) === 8)
        {
            averageRank = "Immortal"
        }

        else 
        {
            averageRank = `${ranks[Math.trunc(props.average_rank / 10) - 1]} ${props.average_rank % 10 === 0? "" : props.average_rank % 10}`
        }
    }

    else 
    {
        averageRank = "Unknown"
    }
    
    // Calculating result
    let result : string 

    if ((props.player_slot >= 0 && props.player_slot <= 4 && props.radiant_win) || (props.player_slot >= 128 && props.player_slot <= 132 && !props.radiant_win))
    {
        result = "Win"
    }

    else 
    {
        result = "Lose"
    }

    // Creating date
    const date = new Date(props.start_time * 1000)
    return(
        <tr onClick={() => navigate(`/matches/public/${props.match_id}`)} key={props.match_id} className="hover:scale-[1.05] cursor-pointer duration-300">
            <td>
                <img className="mx-auto py-1" src={`https://cdn.cloudflare.steamstatic.com/${heroList[props.hero_id].icon}`} alt={heroList[props.hero_id].localized_name} />
            </td>
            <td className="text-teal-400 font-itim text-center py-1">{averageRank}</td>
            <td className={`${result === "Win"? "text-green-400" : "text-red-400"} text-center py-1`}>{result}</td>
            <td className="text-green-400 text-center py-1">{props.kills}</td>
            <td className="text-red-400 text-center py-1">{props.deaths}</td>
            <td className="text-accent text-center py-1">{props.assists}</td>
            <td className="text-yellow-400 text-center py-1">{props.gold_per_min || "null"}</td>
            <td className="text-teal-400 text-center py-1">{props.xp_per_min || "null"}</td>
            <td className="text-text text-center py-1">{date.getDate()}/ {date.getMonth() + 1}/ {date.getFullYear()}</td>
            <td className="text-accent text-center py-1">{String(Math.trunc(props.duration / 60)).padStart(2, "0")} : {String(props.duration % 60).padStart(2, "0")}</td>
            <td className="text-text text-center py-1">{gameModeList[props.game_mode].name.replace("game_mode_", "").replaceAll("_", " ")}</td>
            <td className="text-text text-center py-1">{lobbyList[props.lobby_type].name.replace("lobby_type_", "").replaceAll("_", " ")}</td>
            
        </tr>
    )
}