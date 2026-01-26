import type { ProPlayer } from "../types";
import heroes from "./../helpers/heroes.json"
import { useNavigate } from "react-router-dom";

const heroList : Record<string, any> = heroes

export default function OverViewTable({players} : {players : ProPlayer[]})
{
    const navigate = useNavigate()

    return(
        <div className="overflow-x-auto relative mt-5">
            <table className="min-w-max border-collapse whitespace-nowrap w-full">
                <thead>
                    <tr className="bg-[#3D3D43] text-text font-inter font-normal ">
                        <th className=" py-1 sticky left-0  z-20 min-w-55 bg-[#3d3d43]">
                        Player
                        </th>
                        <th className=" py-1 min-w-20">Kills</th>
                        <th className=" py-1 min-w-20">Deaths</th>
                        <th className=" py-1 min-w-22.5">Assists</th>
                        <th className=" py-1 min-w-22.5">GPM</th>
                        <th className=" py-1 min-w-22.5">XPM</th>
                        <th className=" py-1 min-w-25">Last Hits</th>
                        <th className=" py-1 min-w-22.5">Denies</th>
                        <th className=" py-1 min-w-30">Networth</th>
                    </tr>
                </thead>

                <tbody>
                {players.map(player => (
                    <tr key={player.hero_id}>
                        <td className="py-1 sticky left-0 z-10 min-w-55">
                            <div className="flex items-center gap-2">
                            <img
                                className="w-6 h-6 shrink-0"
                                src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`}
                                alt=""
                            />
                            <span onClick={() => navigate(`/player/${player.account_id}`)} className="truncate hover:underline cursor-pointer max-w-40 text-accent font-itim">
                                {player.name ??
                                player.personaname ??
                                "Anonymous"}
                            </span>
                            </div>
                        </td>

                        <td className="text-green-500 py-1 min-w-20 text-center">{player.kills}</td>
                        <td className="text-red-500 py-1 min-w-20 text-center">{player.deaths}</td>
                        <td className="text-sky-400 py-1 min-w-22.5 text-center">{player.assists}</td>
                        <td className="text-yellow-300 py-1 min-w-22.5 text-center">{player.gold_per_min}</td>
                        <td className="text-pink-400 py-1 min-w-22.5 text-center">{player.xp_per_min}</td>
                        <td className="text-green-500 py-1 min-w-25 text-center">{player.last_hits}</td>
                        <td className="text-green-500 py-1 min-w-22.5 text-center">{player.denies}</td>
                        <td className="text-yellow-300 py-1 min-w-30 text-center">
                            {Math.floor(player.net_worth / 1000 * 10) / 10}k
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}