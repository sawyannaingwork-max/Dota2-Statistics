import { useRef } from "react"
import { useProMatchContext } from "../components/ProMatchDetail"
import heroes from "./../helpers/heroes.json"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const heroList : Record<string, any> = heroes

export default function Damage()
{
    const data = useProMatchContext()
    const damageRef = useRef<HTMLDivElement | null>(null)

    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    useGSAP(() => {
        if (!damageRef.current)
        {
            return 
        }

        gsap.from(damageRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })
    }, { scope : damageRef, dependencies : []})


    return (
        <div ref={damageRef} className="w-[90%] mx-auto mt-9 pb-5">
            <div>
                <div className="flex gap-2 items-center">
                    {
                        data.radiant_team && data.radiant_team.logo_url && 
                        <img className="w-10" src={data.radiant_team.logo_url} alt={data.radiant_team.name? data.radiant_team.name : "Radiant"} />
                    }
                    <h3 className="text-text font-inter">{data.radiant_team?.name? data.radiant_team.name : "Radiant"}</h3>
                </div>

                <div className="overflow-x-auto mt-5">
                    <table className="min-w-max w-full border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-text font-inter bg-[#3D3D43]">
                                <th className="sticky left-0 py-1 min-w-[220px] bg-[#3D3D43]">Player</th>
                                <th className="py-1 min-w-[150px]">Total Hero Damage</th>
                                <th className="py-1 min-w-[150px]">Tower Damage</th>
                                <th className="py-1 min-w-[150px]">Damage Taken</th>
                                <th className="py-1 min-w-[150px]">Total Damage</th>
                                <th className="py-1 min-w-[300px]">Hero Damage</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                radiant.map(function(player, index)
                                {
                                    return(
                                        <tr key={index} className="text-center text-green-300">
                                            <td className="py-1 sticky left-0">
                                                <div className="flex gap-1 items-center">
                                                    <img className="w-6 h-6" src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`} alt={heroList[player.hero_id].localized_name} />
                                                    <h3 className="font-itim">
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
                                                        dire.map(function(p, index)
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
            </div>

            <div className="mt-9">
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
                <div className="overflow-x-auto mt-5">
                    <table className="min-w-max w-full border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="text-text font-inter bg-[#3D3D43]">
                                <th className="sticky left-0 py-1 min-w-[220px] bg-[#3D3D43]">Player</th>
                                <th className="py-1 min-w-[150px]">Total Hero Damage</th>
                                <th className="py-1 min-w-[150px]">Tower Damage</th>
                                <th className="py-1 min-w-[150px]">Damage Taken</th>
                                <th className="py-1 min-w-[150px]">Total Damage</th>
                                <th className="py-1 min-w-[300px]">Hero Damage</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                dire.map(function(player, index)
                                {
                                    return(
                                        <tr key={index} className="text-center text-green-300">
                                            <td className="py-1 sticky left-0">
                                                <div className="flex gap-1 items-center">
                                                    <img className="w-6 h-6" src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`} alt={heroList[player.hero_id].localized_name} />
                                                    <h3 className="font-itim">
                                                        {
                                                            player.name ?? player.personaname ?? "Anonymous"
                                                        }
                                                    </h3>
                                                </div>
                                            </td>
                                            <td>{player.hero_damage}</td>
                                            <td>{player.tower_damage}</td>
                                            <td>
                                                {
                                                    player.damage_taken && Object.keys(player.damage_taken).reduce(function(prev, current)
                                                    {   
                                                        if (player.damage_taken)
                                                        {
                                                            return prev + player.damage_taken[current]
                                                        }

                                                        return prev
                                                        
                                                    }, 0)
                                                }
                                            </td>
                                            <td>
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
                                                <div className="flex gap-5 justify-center">
                                                    {
                                                        radiant.map(function(p, index)
                                                        {
                                                            return (
                                                                <div key={index} className="flex flex-col gap-1 items-center">
                                                                    <img
                                                                        className={`w-6 h-6 ${player.damage && player.damage[heroList[p.hero_id].name] ? "" : "grayscale-100"}`}
                                                                        src={`https://cdn.cloudflare.steamstatic.com/${heroList[p.hero_id].icon}`}
                                                                        alt={heroList[p.hero_id].localized_name}
                                                                    />
                                                                    <span className="text-xs">
                                                                        {
                                                                            player.damage && player.damage[heroList[p.hero_id].name]
                                                                                ? player.damage[heroList[p.hero_id].name]
                                                                                : "0"
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

            </div>
        </div>
    )
}