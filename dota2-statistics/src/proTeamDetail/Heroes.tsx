import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import heroes from "./../helpers/heroes.json"
import type { ProTeamHero } from "../types"
import Loader from "../components/Loader"


const heroList : Record<string, any> = heroes 

export default function Heroes()
{
    const { id } = useParams()


    const { data, isFetching, isError} = useOpenDota<ProTeamHero[]>(`proTeamHeroes${id}`, `https://api.opendota.com/api/teams/${id}/heroes`)

    if (isFetching)
    {
        return <Loader />
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