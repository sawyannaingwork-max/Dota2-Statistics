import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { ProTeam } from "../types"

export default function BasicInfo()
{
    const { id } = useParams()

    if (!id)
    {
        return <p>Invalid Usage.</p>
    }

    const { data, isFetching, isError} = useOpenDota<ProTeam>(`proteamDetail${id}`, `https://api.opendota.com/api/teams/${id}`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return(
        <div className="pt-9 w-[90%] mx-auto">
            <h2 className="text-center font-itim text-teal-400 text-2xl">{data.name}</h2>
            {
                data.logo_url && 
                <img className="mx-auto w-40 pt-5" src={data.logo_url} alt={data.name} />
            }
            <table className="w-full max-w-[400px] mx-auto text-center mt-5 ">
                <tr>
                    <th className="text-secondary font-inter py-2">Rating</th>
                    <td className="text-text font-itim">{data.rating}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Wins</th>
                    <td className="text-text font-itim">{data.wins}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Losses</th>
                    <td className="text-text font-itim">{data.losses}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Win Rate</th>
                    <td className="text-text font-itim">{Math.trunc(data.wins / (data.wins + data.losses) * 100 * 100) / 100}%</td>
                </tr>
            </table>
        </div>
    )


}