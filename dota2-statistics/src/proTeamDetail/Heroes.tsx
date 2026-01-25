import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import heroes from "./../helpers/heroes.json"
import type { ProTeamHero } from "../types"

const heroList : Record<string, any> = heroes 

export default function Heroes()
{
    const { id } = useParams()


    const { data, isFetching, isError} = useOpenDota<ProTeamHero[]>(`proTeamHeroes${id}`, `https://api.opendota.com/api/teams/${id}/heroes`)

    if (isFetching)
    {
        return (
            <div className="mt-9 w-[90%] mx-auto max-w-250 animate-pulse">

            {/* ===== Title ===== */}
            <div className="h-7 w-32 bg-gray-700 rounded mb-5" />

            {/* ===== Table ===== */}
            <table className="w-full">
                <thead>
                <tr className="bg-[#3D3D43]">
                    <th className="py-2">
                    <div className="h-4 w-16 mx-auto bg-gray-600 rounded" />
                    </th>
                    <th className="py-2">
                    <div className="h-4 w-12 mx-auto bg-gray-600 rounded" />
                    </th>
                    <th className="py-2">
                    <div className="h-4 w-10 mx-auto bg-gray-600 rounded" />
                    </th>
                    <th className="py-2">
                    <div className="h-4 w-16 mx-auto bg-gray-600 rounded" />
                    </th>
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                    <tr key={i}>
                    {/* Hero icon */}
                    <td className="py-2">
                        <div className="w-12 h-7 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Total */}
                    <td className="py-2">
                        <div className="h-4 w-10 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Wins */}
                    <td className="py-2">
                        <div className="h-4 w-8 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Win rate */}
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-gray-700 rounded" />
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
        return <p>Something went wrong.Try again later.</p>
    }

    return(
        <div className="mt-9 w-[90%] mx-auto max-w-250">
            <h2 className="text-2xl text-text">Heroes</h2>
            <table className="w-full mt-5">
                <thead>
                    <tr className="bg-[#3D3D43]">
                        <th className="text-text py-1">Hero</th>
                        <th className="text-text py-1">Total</th>
                        <th className="text-text py-1">Win</th>
                        <th className="text-text py-1">Win Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(function(hero)
                        {
                            return(
                                <tr key={hero.hero_id}>
                                    <td className="py-1">
                                        <img className="mx-auto" src={`https://cdn.cloudflare.steamstatic.com/${heroList[hero.hero_id].icon}`} alt={hero.localized_name} />
                                    </td>
                                    <td className="text-center py-1 text-text">{hero.games_played}</td>
                                    <td className="text-center py-1 text-green-400">{hero.wins}</td>
                                    <td className="text-center py-1 text-green-300">{Math.trunc(hero.wins / hero.games_played * 100 * 100) / 100}%</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}