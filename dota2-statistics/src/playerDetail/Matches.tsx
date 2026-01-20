import { useNavigate, useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerMatches } from "../types"

import heroes from "./../helpers/heroes.json"
import lobbies from "./../helpers/lobby_type.json"
import gameModes from "./../helpers/game_mode.json"


const heroList : Record<string, any> = heroes 
const lobbyList : Record<string, any> = lobbies
const gameModeList : Record<string, any> = gameModes

export default function Matches()
{
    const { id } = useParams()

    const navigate = useNavigate()

    const ranks = ["Hearld", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"]
    
    const { data : matches, isFetching, isError} = useOpenDota<PlayerMatches[]>(`Player Matches ${id}`, `https://api.opendota.com/api/players/${id}/recentMatches`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later or.Perhap this account matches are set to private.</p>
    }

    return (
        <div className="w-[90%] mx-auto mt-9 overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-[#3D3D43] text-text">
                        <th className="py-1 min-w-[80px]">Hero</th>
                        <th className="py-1 min-w-[120px]">Average Rank</th>
                        <th className="py-1 min-w-[80px]">Result</th>
                        <th className="py-1 min-w-[80px]">K</th>
                        <th className="py-1 min-w-[80px]">D</th>
                        <th className="py-1 min-w-[80px]">A</th>
                        <th className="py-1 min-w-[80px]">GPM</th>
                        <th className="py-1 min-w-[80px]">XPM</th>
                        <th className="py-1 min-w-[120px]">Date</th>
                        <th className="py-1 min-w-[80px]">Duration</th>
                        <th className="py-1 min-w-[80px]">Game</th>
                        <th className="py-1 min-w-[80px]">Lobby</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map(function(match)
                        {
                            // Calculating rank
                            let averageRank : string 

                            if (match.average_rank)
                            {
                                console.log(Math.trunc(match.average_rank / 10))
                                if (Math.trunc(match.average_rank / 10) === 8)
                                {
                                    averageRank = "Immortal"
                                }

                                else 
                                {
                                    averageRank = `${ranks[Math.trunc(match.average_rank / 10) - 1]} ${match.average_rank % 10 === 0? "" : match.average_rank % 10}`
                                }
                            }

                            else 
                            {
                                averageRank = "Unknown"
                            }
                            
                            // Calculating result
                            let result : string 

                            if ((match.player_slot >= 0 && match.player_slot <= 4 && match.radiant_win) || (match.player_slot >= 128 && match.player_slot <= 132 && !match.radiant_win))
                            {
                                result = "Win"
                            }

                            else 
                            {
                                result = "Lose"
                            }

                            // Creating date
                            const date = new Date(match.start_time * 1000)
                            return(
                                <tr onClick={() => navigate(`/matches/public/${match.match_id}`)} key={match.match_id} className="hover:scale-[1.05] cursor-pointer duration-300">
                                    <td>
                                        <img className="mx-auto py-1" src={`https://cdn.cloudflare.steamstatic.com/${heroList[match.hero_id].icon}`} alt={heroList[match.hero_id].localized_name} />
                                    </td>
                                    <td className="text-teal-400 font-itim text-center py-1">{averageRank}</td>
                                    <td className={`${result === "Win"? "text-green-400" : "text-red-400"} text-center py-1`}>{result}</td>
                                    <td className="text-green-400 text-center py-1">{match.kills}</td>
                                    <td className="text-red-400 text-center py-1">{match.deaths}</td>
                                    <td className="text-accent text-center py-1">{match.assists}</td>
                                    <td className="text-yellow-400 text-center py-1">{match.gold_per_min}</td>
                                    <td className="text-teal-400 text-center py-1">{match.xp_per_min}</td>
                                    <td className="text-text text-center py-1">{date.getDate()}/ {date.getMonth() + 1}/ {date.getFullYear()}</td>
                                    <td className="text-accent text-center py-1">{String(Math.trunc(match.duration / 60)).padStart(2, "0")} : {String(match.duration % 60).padStart(2, "0")}</td>
                                    <td className="text-text text-center py-1">{gameModeList[match.game_mode].name.replace("game_mode_", "").replaceAll("_", " ")}</td>
                                    <td className="text-text text-center py-1">{lobbyList[match.lobby_type].name.replace("lobby_type_", "").replaceAll("_", " ")}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}