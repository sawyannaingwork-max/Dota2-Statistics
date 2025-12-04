import heroes from "./../helpers/heroes.json"
import baseurl from "../helpers/baseurl"
import itemIds from "./../helpers/item_ids.json"
import items from "./../helpers/items.json"

export default function Items({players})
{
    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th className="w-[150px] absolute text-left px-2 py-2 z-[5] font-heading text-primaryText">Player</th>
                        <th className="w-[150px]"></th>
                        <th className="w-[400px] text-left font-heading text-primaryText py-2">Items</th>
                        <th className="w-[180px] text-left font-heading text-primaryText">Neutral Items</th>
                        <th className="w-[4000px] min-w-[1500px] max-w-auto text-left font-heading text-primaryText">Item Timings</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        players.map(function(player)
                        {
                            return(
                                <tr key={player.player_slot}>
                                    <td className="px-2 flex gap-1 items-center py-2 w-[150px] absolute z-[5]">
                                        <img src={baseurl + heroes[player.hero_id].icon} alt={heroes[player.hero_id].localized_name} />
                                        <h3 className="font-stylish text-primaryText">{player.name? player.name : "Anonymous"}</h3>
                                    </td>
                                    
                                    <td className="w-[150px]"></td>
                                    <td className="w-[400px]">
                                        
                                        <div className="flex gap-1">
                                            {
                                                player.item_0 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_0]].img} alt={items[itemIds[player.item_0]].dname}/>
                                            }
                                            {
                                                player.item_1 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_1]].img} alt={items[itemIds[player.item_1]].dname}/>
                                            }
                                            {
                                                player.item_2 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_2]].img} alt={items[itemIds[player.item_2]].dname}/>
                                            }
                                            {
                                                player.item_3 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_3]].img} alt={items[itemIds[player.item_3]].dname}/>
                                            }
                                            {
                                                player.item_4 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_4]].img} alt={items[itemIds[player.item_4]].dname}/>
                                            }
                                            {
                                                player.item_5 !== 0 && 
                                                <img className="w-10" src={baseurl + items[itemIds[player.item_5]].img} alt={items[itemIds[player.item_5]].dname}/>
                                            }

                                            {
                                                player.backpack_0 !== 0 && 
                                                <img className="w-10 grayscale-[1]" src={baseurl + items[itemIds[player.backpack_0]].img} alt={items[itemIds[player.backpack_0]].dname}/>
                                            }
                                            {
                                                player.backpack_1 !== 0 && 
                                                <img className="w-10 grayscale-[1]" src={baseurl + items[itemIds[player.backpack_1]].img} alt={items[itemIds[player.backpack_1]].dname}/>
                                            }
                                            {
                                                player.backpack_2 !== 0 && 
                                                <img className="w-10 grayscale-[1]" src={baseurl + items[itemIds[player.backpack_2]].img} alt={items[itemIds[player.backpack_2]].dname}/>
                                            }
                                        </div>
                                    </td>

                                    <td className="w-[180px]">
                                        <div className="flex gap-1">
                                            {
                                                player.neutral_item_history.map(function(neutral)
                                                {
                                                    if (!neutral.item_neutral)
                                                    {
                                                        return;
                                                    }

                                                    return(
                                                        <div key={neutral.time} className="flex flex-col items-center gap-1">
                                                            <img className="w-10" src={baseurl + items[neutral.item_neutral].img} alt={items[neutral.item_neutral].dname} />
                                                            <span className="text-primaryText font-heading text-LevelSeven">{String(Math.floor(neutral.time / 60)).padStart(2, 0)} : {String(neutral.time % 60).padStart(2, 0)}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>

                                    <td className="w-[2500px]">
                                        <div className="flex gap-2">
                                            {
                                                player.purchase_log.map(function(item, index)
                                                {
                                                    console.log(item.key)

                                                    if (!item.key)
                                                    {
                                                        return;
                                                    }

                                                    return(
                                                        <div key={index} className="flex flex-col items-center gap-1">
                                                            <img className="w-10" src={baseurl + items[item.key].img} alt={items[item.key].dname} />
                                                            <span className="text-LevelSeven text-primaryText">{String(Math.floor(item.time / 60)).padStart(2, 0)} : {String(item.time % 60).padStart(2, 0)}</span>
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