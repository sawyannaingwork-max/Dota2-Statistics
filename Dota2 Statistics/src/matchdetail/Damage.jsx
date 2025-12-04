import baseurl from "../helpers/baseurl"
import heroes from "./../helpers/heroes.json"
import abilities from "./../helpers/abilities.json"
import items from "./../helpers/items.json"

export default function Damage({players})
{
    // Creatting an object that key is hero name and id is value
    const heroIds = {}

    Object.keys(heroes).forEach(function(key)
    {
        heroIds[heroes[key].name] = key
    })

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th className="w-[150px] lg:relative absolute text-primaryText font-heading py-2 px-2 text-left">Player</th>
                        <th className="w-[150px] lg:hidden"></th>
                        <th className="w-[300px] text-primaryText font-heading py-2 px-2 text-left">Damage</th>
                        <th className="w-[300px] text-primaryText font-heading py-2 px-2 text-left">Damage Taken</th>
                        <th className="w-[100px] text-primaryText font-heading py-2 px-2 text-center">Healing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player)
                        {
                            return(
                                <tr key={player.player_slot}>
                                    <td className="absolute py-2 w-[150px] lg:relative">
                                        <div className="flex gap-1 items-center py-1">
                                            <img src={baseurl + heroes[player.hero_id].icon} alt={heroes[player.hero_id].localized_name} />
                                            <h3 className="text-primaryText">{player.name ? player.name : "Anonymous"}</h3>
                                        </div>
                                    </td>
                                    <td className="lg:hidden"></td>
                                    <td>
                                        <div className="flex gap-3 items-center">
                                            {
                                                Object.keys(player.damage).map(function(key)
                                                {
                                                    if (!key.startsWith("npc_dota_hero"))
                                                    {
                                                        return;
                                                    }
                                                    return(
                                                        
                                                        <div key={key} className="flex gap-1 flex-col items-center">
                                                            <img src={baseurl + heroes[heroIds[key]].icon} alt="" />
                                                            <span className="text-primaryText text-LevelSeven">{player.damage[key]}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex gap-3">
                                            {
                                                Object.keys(player.damage_taken).map(function(key)
                                                {
                                                    if (!key.startsWith("npc_dota_hero"))
                                                    {
                                                        return;
                                                    }

                                                    return(
                                                        <div className="flex flex-col gap-1 items-center">
                                                            <img src={baseurl + heroes[heroIds[key]].icon} alt={heroes[heroIds[key]].localized_name} />
                                                            <span className="text-primaryText text-LevelSeven">{player.damage_taken[key]}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>

                                    <td className="text-center text-green-400">
                                        <span>{player.hero_healing}</span>
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