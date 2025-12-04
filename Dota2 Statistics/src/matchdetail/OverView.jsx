import heroes from "./../helpers/heroes.json"
import baseurl from "../helpers/baseurl"

export default function OverView({players})
{
    return(
        <div className="overflow-x-auto">
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className="text-primaryText lg:relative absolute w-[150px] text-left py-2 px-1">Player</th>
                        <th className="w-[150px] lg:hidden"></th>
                        <th className="text-primaryText w-[100px] py-2">GPM</th>
                        <th className="text-primaryText w-[100px] py-2">XPM </th>
                        <th className="text-primaryText w-[100px] py-2">Kills</th> 
                        <th className="text-primaryText w-[100px] py-2">Deaths</th>
                        <th className="text-primaryText w-[100px] py-2">Assists</th>
                        <th className="text-primaryText w-[100px] py-2">Last Hits</th>
                        <th className="text-primaryText w-[100px] py-2">Denies</th>
                        <th className="text-primaryText w-[100px] py-2">Networth</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player)
                        {
                            return(
                                <tr key={player.player_slot} className="text-center">
                                    <td className="flex gap-1 items-center absolute lg:py-2 lg:relative lg:w-full  w-[150px] z-10 bg-background">
                                        <img src={baseurl + heroes[player.hero_id].icon} alt={heroes[player.hero_id].localized_name} />
                                        <h3 className="text-primaryText font-stylish">{player.name? player.name : "Anonymous"}</h3>
                                    </td>

                                    <td className="w-[150px] lg:hidden">

                                    </td>
                                    <td className="py-2">
                                        <span className="text-yellow-300">{player.gold_per_min}</span>
                                    </td>
                                    <td>
                                        <span className="text-secondaryText">{player.xp_per_min}</span>
                                    </td>
                                    <td>
                                        <span className="text-green-400">{player.kills}</span>
                                    </td>
                                    <td>
                                        <span className="text-red-400">{player.deaths}</span>
                                    </td>
                                    <td>
                                        <span className="text-secondaryText">{player.assists}</span>
                                    </td>
                                    <td>
                                        <span className="text-green-400">{player.last_hits}</span>
                                    </td>
                                    <td>
                                        <span className="text-green-400">{player.denies}</span>
                                    </td>
                                    <td>
                                        <span className="text-yellow-300">{player.net_worth}</span>
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