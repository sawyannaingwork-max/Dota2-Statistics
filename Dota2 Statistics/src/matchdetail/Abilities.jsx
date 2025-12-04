import heroes from "./../helpers/heroes.json"
import baseurl from "../helpers/baseurl"
import abilityIds from "./../helpers/ability_ids.json"
import abilities from "./../helpers/abilities.json"

export default function Abilities({players})
{
    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th className="absolute lg:relative w-[150px] text-left px-2 text-primaryText font-heading py-2">Player</th>
                        <th className="w-[150px] lg:hidden"></th>
                        <th className="w-[800px] lg:w-auto text-left text-primaryText font-heading py-2">Ability Orders</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map(function(player)
                        {
                            return(
                                <tr key={player.player_slot}>
                                    <td className="px-2 flex gap-1 lg:relative items-center  py-[5px] w-[150px] absolute z-[5]">
                                        <img src={baseurl + heroes[player.hero_id].icon} alt={heroes[player.hero_id].localized_name} />
                                        <h3 className="font-stylish text-primaryText">{player.name? player.name : "Anonymous"}</h3>
                                    </td>

                                    <td className="w-[150px] lg:hidden">

                                    </td>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            {
                                                player.ability_upgrades_arr.map(function(ability, index)
                                                {
                                                    if (abilities[abilityIds[ability]].img)
                                                    {
                                                        return <img key={index} className="w-10" src={baseurl + abilities[abilityIds[ability]].img} alt={abilities[abilityIds[ability]].dname} />
                                                    }
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