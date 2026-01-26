import type { ProPlayer } from "../types"
import heroes from "./../helpers/heroes.json"
const heroList : Record<string, any> = heroes
import { useNavigate } from "react-router-dom"

export default function DamageTable({players, enemies} : {players : ProPlayer[], enemies : ProPlayer[]})
{
    const navigate = useNavigate()
    return(
        <div className="overflow-x-auto mt-5">
            <table className="min-w-max w-full border-collapse whitespace-nowrap">
                <thead>
                    <tr className="text-text font-inter bg-[#3D3D43]">
                        <th className="sticky left-0 py-1 min-w-55 bg-[#3D3D43]">Player</th>
                        <th className="py-1 min-w-37.5">Total Hero Damage</th>
                        <th className="py-1 min-w-37.5">Tower Damage</th>
                        <th className="py-1 min-w-37.5">Damage Taken</th>
                        <th className="py-1 min-w-37.5">Total Damage</th>
                        <th className="py-1 min-w-75">Hero Damage</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map(function(player, index)
                        {
                            return(
                                <tr key={index} className="text-center text-green-300">
                                    <td className="py-1 sticky left-0">
                                        <div className="flex gap-1 items-center">
                                            <img className="w-6 h-6" src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`} alt={heroList[player.hero_id].localized_name} />
                                            <h3 className="font-itim hover:underline cursor-pointer" onClick={() => navigate(`/player/${player.account_id}`)}>
                                                {
                                                    player.name ?? player.personaname ?? "Anonymous"
                                                }
                                            </h3>
                                        </div>
                                    </td>
                                    <td>{player.hero_damage}</td>
                                    <td>{player.tower_damage}</td>
                                    <td>
                                        {/*  Damage Taken */}
                                        {
                                            player.damage_taken && Object.keys(player.damage_taken).reduce(function(prev, current)
                                            {
                                                if (current.startsWith("npc_dota_hero"))
                                                {
                                                    if (player.damage_taken)
                                                    {
                                                        return prev + player.damage_taken[current]
                                                    }

                                                    return prev
                                                    
                                                }
                                                
                                                return prev
                                            }, 0)
                                        }
                                    </td>
                                    <td>
                                        {/* Total Damage */}
                                        {
                                            player.damage && Object.keys(player.damage).reduce(function(prev, current)
                                            {
                                                if (player.damage)
                                                {
                                                    return prev + player.damage[current]
                                                }

                                                return prev
                                                
                                            }, 0)
                                        }
                                    </td>
                                    <td>
                                        {/* Hero Damage */}
                                        <div className="flex gap-5 justify-center">
                                            {
                                                enemies.map(function(p, index)
                                                {
                                                    return (
                                                        <div key={index} className="flex flex-col gap-1 items-center">
                                                            <img className={`w-6 h-6 ${player.damage && player.damage[heroList[p.hero_id].name]? "" : "grayscale-100"}`} src={`https://cdn.cloudflare.steamstatic.com/${heroList[p.hero_id].icon}`} alt={heroList[p.hero_id].localized_name} />
                                                            <span className="text-xs">
                                                                {
                                                                    player.damage && player.damage[heroList[p.hero_id].name] ? player.damage[heroList[p.hero_id].name] : "0"
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}