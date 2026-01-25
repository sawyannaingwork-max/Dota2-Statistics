import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import type { PlayerHeroStats } from "./../types"
import heroes from "./../helpers/heroes.json"
import Loader from "../components/Loader";
import useOpenDota from "../custom/useOpenDota";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const heroList : Record<string, any> = heroes

export default function Heroes()
{
    const { id } = useParams()

    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError } = useOpenDota<PlayerHeroStats[]>(`Player Hero Winrate ${id}`, `https://api.opendota.com/api/players/${id}/heroes`)

    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        gsap.from(elementRef.current, {
            opacity : 0,
            y : 30,
            duration : 0.6,
            ease : "sine"
        })
    }, { scope : elementRef, dependencies : [isFetching]})
    if (isFetching)
    {

        return (
            <div className="w-[90%] mx-auto overflow-x-auto mt-9 animate-pulse">
            <table className="min-w-max mx-auto">
                <thead>
                <tr className="bg-[#3D3D43]">
                    {Array.from({ length: 11 }).map((_, i) => (
                    <th key={i} className="py-2 px-4">
                        <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 7 }).map((_, i) => (
                    <tr key={i}>
                    {/* Hero icon (sticky) */}
                    <td className="py-2 sticky left-0 bg-primary">
                        <div className="w-10 h-6 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Last played */}
                    <td className="py-2">
                        <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Total */}
                    <td className="py-2">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win */}
                    <td className="py-2">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win rate */}
                    <td className="py-2">
                        <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* With games */}
                    <td className="py-2">
                        <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* With win */}
                    <td className="py-2">
                        <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* With win rate */}
                    <td className="py-2">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against games */}
                    <td className="py-2">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against win */}
                    <td className="py-2">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against win rate */}
                    <td className="py-2">
                        <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )

    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return (
        <div ref={elementRef} className="w-[90%] mx-auto overflow-x-auto mt-9" >
            <table className="min-w-max mx-auto">
                <thead>
                    <tr className="text-text bg-[#3D3D43]">
                        <th className="py-1 min-w-[80px] sticky left-0">Hero</th>
                        <th className="py-1 min-w-[150px]">Last Played</th>
                        <th className="py-1 min-w-[80px]">Total</th>
                        <th className="py-1 min-w-[80px]">Win</th>
                        <th className="py-1 min-w-[80px]">Win Rate</th>
                        <th className="py-1 min-w-[140px]">With Games</th>
                        <th className="py-1 min-w-[140px]">With Win</th>
                        <th className="py-1 min-w-[140px]">Wint Win Rate</th>
                        <th className="py-1 min-w-[140px]">Against Games</th>
                        <th className="py-1 min-w-[140px]">Against Win</th>
                        <th className="py-1 min-w-[140px]">Against Win Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(function(hero)
                        {
                            let date

                            if (hero.last_played)
                            {
                                date = new Date(hero.last_played * 1000)
                            }

                            return(
                                <tr key={hero.hero_id} className="font-itim">
                                    <td className="py-1 text-center minw-[150px] left-0 sticky">
                                        <img className="mx-auto" src={`https://cdn.cloudflare.steamstatic.com/${heroList[hero.hero_id].icon}`} alt={heroList[hero.hero_id].localized_name} />
                                    </td>
                                    <td className="py-1 text-center text-teal-400">{date? `${date?.getDate()} / ${date?.getMonth() + 1} / ${date?.getFullYear()}` : "never"}</td>
                                    <td className="py-1 text-center text-text">{hero.games}</td>
                                    <td className="py-1 text-center text-green-400">{hero.win}</td>
                                    <td className="py-1 text-center text-accent">{Math.trunc(hero.win / hero.games * 1000) / 10}%</td>
                                    <td className="py-1 text-center text-text">{hero.with_games}</td>
                                    <td className="py-1 text-center text-green-400">{hero.with_win}</td>
                                    <td className="py-1 text-center text-accent">{Math.trunc(hero.with_win / hero.with_games * 1000) / 10}%</td>
                                    <td className="py-1 text-center text-text">{hero.against_games}</td>
                                    <td className="py-1 text-center text-green-400">{hero.against_win}</td>
                                    <td className="py-1 text-center text-accent">{Math.trunc(hero.against_win / hero.against_games * 1000) / 10}%</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}