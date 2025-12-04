import heroes from "./../helpers/heroes.json"
import baseurl from "../helpers/baseurl"

export default function Kill({players})
{
    // Creating an object with key as hero name and id as hero value
    const heroIds = {}

    Object.keys(heroes).forEach(function(hero)
    {
        heroIds[heroes[hero].name] = hero;
    })

    return(
        <div className="overflow-x-auto">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th className="w-[150px] text-left px-2 absolute font-heading text-primaryText py-2">Player</th>
                        <th className="w-[150px]"></th>
                        <th className="w-[250px] text-left font-heading text-primaryText py-2">Kill</th>
                        <th className="w-[250px] text-left font-heading text-primaryText py-2">Killed By</th>
                        <th className="w-[100px] text-center font-heading text-primaryText py-2">Tower Kill</th>
                        <th className="w-[100px] text-center font-heading text-primaryText py-2">Courier Kill</th>
                        <th className="w-[150px] text-center font-heading text-primaryText py-2">Observer Kill</th>
                        <th className="w-[100px] text-center font-heading text-primaryText py-2">Sentry Kill</th>
                        <th className="w-[150px] text-center font-heading text-primaryText py-2">Roshan Kill</th>
                        <th className="w-[1200px] text-left font-heading text-primaryText py-2">Kill Log</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player)
                        {
                            console.log(player.hero_id)
                            return(
                                <tr key={player.player_slot}>
                                    <td className="flex gap-1 items-center py-3 absolute px-2 w-[150px]">
                                        <img src={baseurl + heroes[player.hero_id].icon} alt={heroes[player.hero_id].localized_name} />
                                        <h3 className="text-primaryText font-stylish">{player.name ? player.name : "Anonymous"}</h3>
                                    </td>

                                    <td className="w-[150px]">

                                    </td>
                                    <td>
                                        <div className="flex gap-1">
                                            {
                                                Object.keys(player.killed).map(function(key)
                                                {
                                                    if (key.startsWith("npc_dota_hero"))
                                                    {
                                                        return (
                                                            <div key={key} className="flex flex-col gap-1 items-center">
                                                                <img src={baseurl + heroes[heroIds[key]].icon} alt={heroes[heroIds[key]].localized_name}/>
                                                                <span className="text-primaryText text-LevelSix">x{player.killed[key]}</span>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </td>


                                    <td>
                                        <div className="flex gap-2">
                                            {
                                                Object.keys(player.killed_by).map(function(key)
                                                {
                                                    if (!key.startsWith("npc_dota_hero"))
                                                    {
                                                        return;
                                                    }
                                                    
                                                    return(
                                                        <div key={key} className="flex flex-col gap-1 items-center">
                                                            <img src={baseurl + heroes[heroIds[key]].icon} alt={heroes[heroIds[key]].localized_name} />
                                                            <span className="text-primaryText">x{player.killed_by[key]}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </td>
                                    
                                    <td>
                                        <p className="text-green-400 text-center">{player.tower_kills}</p>
                                    </td>

                                    <td>
                                        <p className="text-green-400 text-center">{player.courier_kills}</p>
                                    </td>

                                    <td>
                                        <p className="text-green-400 text-center">{player.observer_kills}</p>
                                    </td>

                                    <td>
                                        <p className="text-green-400 text-center">{player.sentry_kills}</p>
                                    </td>

                                    <td>
                                        <p className="text-green-400 text-center">{player.roshan_kills}</p>
                                    </td>

                                    <td>
                                        <div className="flex gap-4 flex-wrap">
                                            {
                                                player.kills_log.map(function(kill, index)
                                                {
                                                    return(
                                                        <div key={index} className="flex flex-col gap-1 items-center">
                                                            <img src={baseurl + heroes[heroIds[kill.key]].icon} alt={heroes[heroIds[kill.key]].localized_name} />
                                                            <span className="text-primaryText">{String(Math.floor(kill.time / 60)).padStart(2, 0)} : {String(kill.time % 60).padStart(2, 0)}</span>
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