import type { ProPlayer } from "../types"
import heroes from "./../helpers/heroes.json"
import abilities from "./../helpers/abilities.json"
import abilityIds from "./../helpers/ability_ids.json"

const heroList : Record<string, any> = heroes
const abilityList : Record<string, any> = abilities
const abilityIdList : Record<string, string> = abilityIds

export default function AbilityTable({players} : {players : ProPlayer[]})
{
    return (
        <div className="mt-5 overflow-x-auto">
            <table className="min-w-max">
                <thead>
                    <tr className="text-text bg-[#3D3D43]">
                        <th className="sticky left-0 bg-[#3D3D43] min-w-[220px] py-1">Player</th>
                        <th className="py-1 min-w-[1800px]">Ability Learning Order</th>
                        <th className="py-1 min-w-[1000px]">Ability Usage</th>
                        <th className="py-1">Ability Targets</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player)
                        {
                            return(
                                <tr key={player.account_id} className="text-green-300">
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
                                    
                                    {/* Ability learning order */}
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            {
                                                player.ability_upgrades_arr?.map(function(ability, index)
                                                {

                                                    if (!abilityList[abilityIdList[ability]])
                                                    {
                                                        return 
                                                    }

                                                    if (abilityList[abilityIdList[ability]].img)
                                                    {
                                                        return(
                                                            <img className="w-10" key={index} src={`https://cdn.cloudflare.steamstatic.com/${abilityList[abilityIdList[ability]].img}`} alt={abilityList[abilityIdList[ability]].dname} />
                                                        )
                                                    }

                                                    return <p key={index}>{ abilityList[abilityIdList[ability]].dname }</p>
                                                })
                                            }
                                        </div>
                                    </td>

                                    {/* Ability Usage */}
                                    <td>
                                        <div className="flex gap-2 justify-center">
                                            {
                                                player.ability_uses && Object.keys(player.ability_uses).map(function(key)
                                                {
                                                    return(
                                                        <div key={key} className="flex flex-col gap-1 items-center">
                                                            <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${abilityList[key]?.img}`} alt={abilityList[key]?.dname? abilityList[key].dname : key} />
                                                            <span>{player.ability_uses && player.ability_uses[key]}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    
                                    {/* Ability Target */}
                                    <td>
                                        <div className="flex gap-10 justify-center">
                                            {
                                                player.ability_targets && Object.keys(player.ability_targets).map(function(key)
                                                {
                                                    return(
                                                        <div key={key} className="flex flex-col items-center">
                                                            <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${abilityList[key].img}`} alt={abilityList[key].dname} />
                                                            <div className="flex gap-2">
                                                                {
                                                                    player.ability_targets && Object.keys(player.ability_targets[key]).map(function(key2)
                                                                    {
                                                                        return(
                                                                            <div key={key2} className="flex flex-col gap-1 items-center">
                                                                                <img className="w-6 h-6" key={key2} src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/icons/${key2.replace("npc_dota_hero_", "")}.png`} alt={key2} />
                                                                                <span>{player.ability_targets && player.ability_targets[key][key2]}</span>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
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