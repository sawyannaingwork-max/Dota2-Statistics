import type { PublicPlayer } from "../types"
import heroes from "./../helpers/heroes.json"
import items from "./../helpers/items.json"
import itemIds from "./../helpers/item_ids.json"
import abilities from "./../helpers/abilities.json"
import abilityIds from "./../helpers/ability_ids.json"
import { useNavigate } from "react-router-dom"

const abilityList : Record<string, any> = abilities
const abilityIdList : Record<string, string> = abilityIds

const itemList : Record<string, any> = items 
const itemIdList : Record<string, string> = itemIds

const heroList : Record<string, any> = heroes 

export default function Table({players} : {players : PublicPlayer[]} )
{
    const navigate = useNavigate()

    function handleClick(id : number | null)
    {
        if (!id)
        {
            return
        }

        navigate(`/player/${id}`)
    }

    return (
        <div className="overflow-x-auto mt-5">
            <table className="min-w-max">
                <thead className="text-text">
                    <tr className="bg-[#3D3D43]">
                        <th className="py-1 sticky left-0 min-w-[220px] bg-[#3d3d43]">Player</th>
                        <th className="py-1 min-w-[80px]">Kills</th>
                        <th className="py-1 min-w-[80px]">Deaths</th>
                        <th className="py-1 min-w-[80px]">Assists</th>
                        <th className="py-1 min-w-[80px]">Last Hits</th>
                        <th className="py-1 min-w-[80px]">Denies</th>
                        <th className="py-1 min-w-[80px]">GPM</th>
                        <th className="py-1 min-w-[80px]">XPM</th>
                        <th className="py-1 min-w-[80px]">Net Worth</th>
                        <th className="py-1 min-w-[150px]">Hero Damage</th>
                        <th className="py-1 min-w-[150px]">Tower Damage</th>
                        <th className="py-1 min-w-[400px]">Items</th>
                        <th className="py-1">Ability Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player, index)
                        {
                            if (player.hero_id === 0)
                            {
                                return 
                            }

                            return(
                                <tr key={index}>
                                    <td className="py-1 sticky left-0 z-10 ">
                                        <div className="flex gap-1 items-center">
                                            <img className="w-6" src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`} alt={heroList[player.hero_id].localized_name} />
                                            <h3 onClick={() => handleClick(player.account_id)} className={`font-itim text-teal-400 ${player.account_id? "hover:underline cursor-pointer" : ""}`}>{player.personaname? player.personaname : "Anonymous"}</h3>
                                        </div>
                                    </td>
                                    <td className="text-green-500 text-center">{player.kills}</td>
                                    <td className="text-red-500 text-center">{player.deaths}</td>
                                    <td className="text-center text-teal-400">{player.assists}</td>
                                    <td className="text-center text-teal-400">{player.last_hits}</td>
                                    <td className="text-center text-teal-400">{player.denies}</td>
                                    <td className="text-center text-yellow-300">{player.gold_per_min}</td>
                                    <td className="text-center text-teal-400">{player.xp_per_min}</td>
                                    <td className="text-center text-yellow-300">{Math.trunc(player.net_worth / 1000 * 10) / 10}k</td>
                                    <td className="text-center text-teal-400">{player.hero_damage}</td>
                                    <td className="text-center text-teal-400">{player.tower_damage}</td>
                                    <td>
                                        <div className="flex gap-1">
                                            {
                                                player.item_0 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_0]]?.img}`} alt={itemList[itemIdList[player.item_0]]?.dname} />
                                            }
                                            {
                                                player.item_1 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_1]]?.img}`} alt={itemList[itemIdList[player.item_1]]?.dname} />
                                            }
                                            {
                                                player.item_2 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_2]]?.img}`} alt={itemList[itemIdList[player.item_2]]?.dname} />
                                            }
                                            {
                                                player.item_3 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_3]]?.img}`} alt={itemList[itemIdList[player.item_3]]?.dname} />
                                            }
                                            {
                                                player.item_4 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_4]]?.img}`} alt={itemList[itemIdList[player.item_4]]?.dname} />
                                            }
                                            {
                                                player.item_5 !== 0 && 
                                                <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_5]]?.img}`} alt={itemList[itemIdList[player.item_5]]?.dname} />
                                            }

                                            {
                                                player.backpack_0 !== 0 && 
                                                <img className="w-10 grayscale-100" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.backpack_0]]?.img}`} alt={itemList[itemIdList[player.backpack_0]]?.dname} />
                                            }

                                            {
                                                player.backpack_1 !== 0 && 
                                                <img className="w-10 grayscale-100" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.backpack_1]]?.img}`} alt={itemList[itemIdList[player.backpack_1]]?.dname} />
                                            }

                                            {
                                                player.backpack_2 !== 0 && 
                                                <img className="w-10 grayscale-100" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.backpack_2]]?.img}`} alt={itemList[itemIdList[player.backpack_2]]?.dname} />
                                            }
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-1 items-center">
                                            {
                                                player.ability_upgrades_arr?.map(function(abilityId, index)
                                                {
                                                    if (!abilityList[abilityIdList[abilityId]]?.img)
                                                    {
                                                        return <p key={index} className="text-teal-400 text-sm">{abilityList[abilityIdList[abilityId]]?.dname}</p>
                                                    }
                                                    
                                                    return <img key={index} className="w-10 py-1" src={`https://cdn.cloudflare.steamstatic.com/${abilityList[abilityIdList[abilityId]].img}`} alt={abilityList[abilityIdList[abilityId]].dname} />
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