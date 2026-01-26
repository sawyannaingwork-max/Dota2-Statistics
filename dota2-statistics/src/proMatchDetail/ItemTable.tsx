import type { ProPlayer } from "../types";

import heroes from "./../helpers/heroes.json"
import items from "./../helpers/items.json"
import itemIds from "./../helpers/item_ids.json"
import { useNavigate } from "react-router-dom";


const heroList : Record<string, any> = heroes
const itemList : Record<string, any> = items
const itemIdList : Record<string, string> = itemIds

export default function ItemTable({players} : {players: ProPlayer[]})
{
    const navigate = useNavigate()
    return(
        <div className="mt-5 overflow-x-auto">
            <table className="min-w-max border-collapse whitespace-nowrap">
                <thead>
                    <tr className="text-text bg-[#1f1f24]">
                        <th className="py-1 min-w-55 sticky left-0 bg-[#1f1f24]">Player</th>
                        <th className="py-1 min-w-100">Items</th>
                        <th className="py-1 min-w-50">Neutral Items</th>
                        <th className="py-1 min-w-300">Purchase Log</th>
                        <th className="py-1">Item Usage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player, index)
                        {
                            return(
                                <tr key={index}>
                                    <td className="sticky left-0 z-10 bg-[#1f1f24] min-w-55 py-2">
                                        <div className="flex gap-1 items-center">
                                        <img
                                            className="w-6 h-6 shrink-0"
                                            src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`}
                                            alt={heroList[player.hero_id].localized_name}
                                        />
                                        <span onClick={() => navigate(`/player/${player.account_id}`)} className="truncate max-w-40 hover:underline cursor-pointer text-accent font-itim">
                                            {player.name ?? player.personaname ?? "Anonymous"}
                                        </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-1">
                                            {
                                                player.item_0 !== 0 && <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_0]]?.img}`} alt={itemList[itemIdList[player.item_0]]?.dname} />
                                            }
                                            {player.item_1 !== 0 && <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_1]]?.img}`} alt={itemList[itemIdList[player.item_1]]?.dname} />}
                                            {player.item_2 !== 0 && <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_2]]?.img}`} alt={itemList[itemIdList[player.item_2]]?.dname} />}
                                            {player.item_3 !== 0 && <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_3]]?.img}`} alt={itemList[itemIdList[player.item_3]]?.dname} />}
                                            {player.item_4 !== 0 && <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_4]]?.img}`} alt={itemList[itemIdList[player.item_4]]?.dname} />}
                                            {player.item_5 !== 0 && <img className="w-10 mr-5" src={`https://cdn.cloudflare.steamstatic.com/${itemList[itemIdList[player.item_5]]?.img}`} alt={itemList[itemIdList[player.item_5]]?.dname} />}

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
                                        <div className="flex gap-2">
                                            {
                                                player.neutral_item_history?.map(function(item, index)
                                                {
                                                    if (!item.item_neutral || !itemList[item.item_neutral])
                                                    {
                                                        return 
                                                    }

                                                    return(
                                                        <div key={index} className="flex flex-col gap-1 items-center">
                                                            <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[item.item_neutral].img}`} alt="" />
                                                            <span className="text-xs text-green-400">{String(Math.floor(item.time / 60)).padStart(2, "0")} : {String(item.time % 60).padStart(2, "0")}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            {
                                                player.purchase_log?.map(function(purchase, index)
                                                {
                                                    return(
                                                        <div key={index} className="flex gap-1 flex-col items-center">
                                                            <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[purchase.key].img}`} alt={itemList[purchase.key].dname} />
                                                            <span className="text-xs text-green-400">{String(Math.floor(purchase.time / 60)).padStart(2, "0")} : {String(Math.abs(purchase.time % 60)).padStart(2, "0")}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex mx-10">
                                            {
                                                player.item_uses && Object.keys(player.item_uses).map(function(key)
                                                {
                                                    if (!itemList[key])
                                                    {
                                                        return
                                                    }
                                                    return(
                                                        <div key={key} className="flex flex-col gap-1 items-center">
                                                            <img className="w-10" src={`https://cdn.cloudflare.steamstatic.com/${itemList[key].img}`} alt={itemList[key].dname} />
                                                            <span className="text-xs text-green-400">{player.item_uses && player.item_uses[key] || "0"}</span>
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