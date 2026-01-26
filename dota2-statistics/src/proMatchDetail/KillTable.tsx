import type { ProPlayer } from "../types"
import heroes from "./../helpers/heroes.json"
import { useNavigate } from "react-router-dom"
const heroList : Record<string, any> = heroes

export default function KillTable({players, enemies} : {players : ProPlayer[], enemies : ProPlayer[]})
{
    const navigate = useNavigate()

    return(
        <div className="overflow-x-auto mt-5">
            <table className="min-w-max border-collapse whitespace-nowrap">
                <thead>
                    <tr className="bg-[#3D3D43] text-text font-inter font-normal">
                        <th className="sticky left-0 z-20 bg-[#3D3D43] min-w-55 py-1">
                        Player
                        </th>
                        <th className="min-w-20 py-1">Hero</th>
                        <th className="min-w-20 py-1">Tower</th>
                        <th className="min-w-22.5 py-1">Roshan</th>
                        <th className="min-w-22.5 py-1">Neutral</th>
                        <th className="min-w-22.5 py-1">Ancient</th>
                        <th className="min-w-22.5 py-1">Observer</th>
                        <th className="min-w-22.5 py-1">Sentry</th>
                        <th className="min-w-32.5 py-1">Necronomicon</th>
                        <th className="min-w-22.5 py-1">Courier</th>
                        <th className="min-w-65 py-1">Killed</th>
                        <th className="min-w-65 py-1">Killed By</th>
                        <th className="min-w-75 py-1">Kill Logs</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map(player => (
                        <tr key={player.hero_id} className="text-green-300">
                        {/* Player (sticky) */}
                            <td className="sticky left-0 z-10 bg-[#1f1f24] min-w-55 py-1">
                                <div className="flex gap-1 items-center">
                                <img
                                    className="w-6 h-6 shrink-0"
                                    src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`}
                                    alt={heroList[player.hero_id].localized_name}
                                />
                                <span onClick={() => navigate(`/player/${player.account_id}`)} className="truncate hover:underline cursor-pointer max-w-40 text-accent font-itim">
                                    {player.name ?? player.personaname ?? "Anonymous"}
                                </span>
                                </div>
                            </td>

                            <td className="py-1 min-w-20 text-center">{player.kills}</td>
                            <td className="py-1 min-w-20 text-center">{player.tower_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.roshan_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.neutral_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.ancient_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.observer_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.sentry_kills}</td>
                            <td className="py-1 min-w-32.5 text-center">{player.necronomicon_kills}</td>
                            <td className="py-1 min-w-22.5 text-center">{player.courier_kills}</td>

                            {/* Killed */}
                            <td className="py-1 min-w-65">
                                <div className="flex gap-3 justify-center">
                                    {enemies.map(enemy => (
                                        <div key={enemy.hero_id} className="flex flex-col gap-1 items-center">
                                        <img
                                            className={`w-6 h-6 ${
                                            player.killed && player.killed[heroList[enemy.hero_id].name]
                                                ? ""
                                                : "grayscale"
                                            }`}
                                            src={`https://cdn.cloudflare.steamstatic.com/${heroList[enemy.hero_id].icon}`}
                                            alt={heroList[enemy.hero_id].localized_name}
                                        />
                                        <span className="text-green-400 text-xs">
                                            x{player.killed && player.killed[heroList[enemy.hero_id].name] || "0"}
                                        </span>
                                        </div>
                                    ))}
                                </div>
                            </td>

                            {/* Killed By */}
                            <td className="py-1 min-w-65">
                                <div className="flex gap-3 justify-center">
                                    {enemies.map(enemy => (
                                        <div key={enemy.hero_id} className="flex flex-col gap-1 items-center">
                                        <img
                                            className={`w-6 h-6 ${
                                            player.killed_by && player.killed_by[heroList[enemy.hero_id].name]
                                                ? ""
                                                : "grayscale"
                                            }`}
                                            src={`https://cdn.cloudflare.steamstatic.com/${heroList[enemy.hero_id].icon}`}
                                            alt={heroList[enemy.hero_id].localized_name}
                                        />
                                        <span className="text-green-400 text-xs">
                                            x{player.killed_by && player.killed_by[heroList[enemy.hero_id].name] || "0"}
                                        </span>
                                        </div>
                                    ))}
                                </div>
                            </td>

                            {/* Kill Logs */}
                            <td className="py-1 min-w-75">
                                <div className="flex justify-center gap-3">
                                    {player.kills_log?.map((kill, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-xs">
                                            <img
                                                className="w-6 h-6"
                                                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/icons/${kill.key.replace(
                                                "npc_dota_hero_",
                                                ""
                                                )}.png`}
                                                alt={kill.key.replace("npc_dota_hero_", "")}
                                            />
                                            <span className="text-green-500 text-xs">
                                                {String(Math.floor(kill.time / 60)).padStart(2, "0")}:
                                                {String(kill.time % 60).padStart(2, "0")}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}