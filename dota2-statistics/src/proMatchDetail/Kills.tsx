import { useProMatchContext } from "../components/ProMatchDetail"
import heroes from "./../helpers/heroes.json"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const heroList : Record<string, any> = heroes

export default function Kill()
{
    const data = useProMatchContext()

    const radiant = data.players.slice(0, 5)
    const dire = data.players.slice(5)

    const killRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (!killRef.current)
        {
            return 
        }

        gsap.from(killRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6
        })
    }, { scope : killRef, dependencies : []})

    return(
        <div ref={killRef} className="w-[90%] mx-auto mt-9">
            <div>
                <div className="flex gap-2 items-center">
                    {
                        data.radiant_team && data.radiant_team.logo_url && 
                        <img className="w-10" src={data.radiant_team.logo_url} alt={data.radiant_team.name? data.radiant_team.name : "Radiant"} />
                    }
                    <h3 className="text-text font-inter">{data.radiant_team?.name? data.radiant_team.name : "Radiant"}</h3>
                </div>   
                <div className="overflow-x-auto mt-5">
                    <table className="min-w-max border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-[#3D3D43] text-text font-inter font-normal">
                                <th className="sticky left-0 z-20 bg-[#3D3D43] min-w-[220px] py-1">
                                Player
                                </th>
                                <th className="min-w-[80px] py-1">Hero</th>
                                <th className="min-w-[80px] py-1">Tower</th>
                                <th className="min-w-[90px] py-1">Roshan</th>
                                <th className="min-w-[90px] py-1">Neutral</th>
                                <th className="min-w-[90px] py-1">Ancient</th>
                                <th className="min-w-[90px] py-1">Observer</th>
                                <th className="min-w-[90px] py-1">Sentry</th>
                                <th className="min-w-[130px] py-1">Necronomicon</th>
                                <th className="min-w-[90px] py-1">Courier</th>
                                <th className="min-w-[260px] py-1">Killed</th>
                                <th className="min-w-[260px] py-1">Killed By</th>
                                <th className="min-w-[300px] py-1">Kill Logs</th>
                            </tr>
                        </thead>

                        <tbody>
                            {radiant.map(player => (
                                <tr key={player.hero_id} className="text-green-300">
                                {/* Player (sticky) */}
                                    <td className="sticky left-0 z-10 bg-[#1f1f24] min-w-[220px] py-1">
                                        <div className="flex gap-1 items-center">
                                        <img
                                            className="w-6 h-6 shrink-0"
                                            src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`}
                                            alt={heroList[player.hero_id].localized_name}
                                        />
                                        <span className="truncate max-w-[160px] text-accent font-itim">
                                            {player.name ?? player.personaname ?? "Anonymous"}
                                        </span>
                                        </div>
                                    </td>

                                    <td className="py-1 min-w-[80px] text-center">{player.kills}</td>
                                    <td className="py-1 min-w-[80px] text-center">{player.tower_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.roshan_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.neutral_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.ancient_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.observer_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.sentry_kills}</td>
                                    <td className="py-1 min-w-[130px] text-center">{player.necronomicon_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.courier_kills}</td>

                                    {/* Killed */}
                                    <td className="py-1 min-w-[260px]">
                                        <div className="flex gap-3 justify-center">
                                            {dire.map(enemy => (
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
                                    <td className="py-1 min-w-[260px]">
                                        <div className="flex gap-3 justify-center">
                                            {dire.map(enemy => (
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
                                    <td className="py-1 min-w-[300px]">
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
            </div>

            <div className="mt-9">
                <div className="flex gap-2 items-center">
                    {
                        data.dire_team && data.dire_team.logo_url && 
                        <img
                        className="w-10"
                        src={data.dire_team.logo_url}
                        alt={data.dire_team.name ? data.dire_team.name : "Dire"}
                        />
                    }
                    <h3 className="text-text font-inter">
                        {data.dire_team?.name ? data.dire_team.name : "Dire"}
                    </h3>
                </div>
                <div className="overflow-x-auto relative mt-5">
                    <table className="min-w-max border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-[#3D3D43] text-text font-inter font-normal">
                                <th className="sticky left-0 z-20 bg-[#3D3D43] min-w-[220px] py-1">
                                Player
                                </th>
                                <th className="min-w-[80px] py-1">Hero</th>
                                <th className="min-w-[80px] py-1">Tower</th>
                                <th className="min-w-[90px] py-1">Roshan</th>
                                <th className="min-w-[90px] py-1">Neutral</th>
                                <th className="min-w-[90px] py-1">Ancient</th>
                                <th className="min-w-[90px] py-1">Observer</th>
                                <th className="min-w-[90px] py-1">Sentry</th>
                                <th className="min-w-[130px] py-1">Necronomicon</th>
                                <th className="min-w-[90px] py-1">Courier</th>
                                <th className="min-w-[260px] py-1">Killed</th>
                                <th className="min-w-[260px] py-1">Killed By</th>
                                <th className="min-w-[300px] py-1">Kill Logs</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dire.map(player => (
                                <tr key={player.hero_id} className="text-green-300">
                                    {/* Player (sticky) */}
                                    <td className="sticky left-0 z-10 bg-[#1f1f24] min-w-[220px] py-1">
                                        <div className="flex gap-1 items-center">
                                        <img
                                            className="w-6 h-6 shrink-0"
                                            src={`https://cdn.cloudflare.steamstatic.com/${heroList[player.hero_id].icon}`}
                                            alt={heroList[player.hero_id].localized_name}
                                        />
                                        <span className="truncate max-w-[160px] text-accent font-itim">
                                            {player.name ?? player.personaname ?? "Anonymous"}
                                        </span>
                                        </div>
                                    </td>

                                    <td className="py-1 min-w-[80px] text-center">{player.kills}</td>
                                    <td className="py-1 min-w-[80px] text-center">{player.tower_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.roshan_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.neutral_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.ancient_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.observer_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.sentry_kills}</td>
                                    <td className="py-1 min-w-[130px] text-center">{player.necronomicon_kills}</td>
                                    <td className="py-1 min-w-[90px] text-center">{player.courier_kills}</td>

                                    {/* Killed */}
                                    <td className="py-1 min-w-[260px]">
                                        <div className="flex gap-3 justify-center">
                                        {radiant.map(enemy => (
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
                                    <td className="py-1 min-w-[260px]">
                                        <div className="flex gap-3 justify-center">
                                        {radiant.map(enemy => (
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
                                    <td className="py-1 min-w-[300px]">
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
            </div>
        </div>
    )
}