import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerBasicInfo } from "../types"
import Loader from "../components/Loader"

export default function BasicInfo()
{
    // Getting id 
    const { id } = useParams()

    if (!id)
    {
        return <p>Invalid Usage and missing id.</p>
    }

    const { data, isFetching, isError} = useOpenDota<PlayerBasicInfo>(`playerDetail${id}`, `https://api.opendota.com/api/players/${id}`)

    if (isFetching)
    {
        return <Loader />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return (
        <div className="w-[90%] mx-auto flex flex-col items-center pt-9">
            <h2 className="text-accent text-2xl font-itim pb-2">{data.profile.personaname}</h2>
            <img className="rounded-md shadow-md shadow-accent" src={data.profile.avatarfull} alt={data.profile.personaname} />
            <table className="text-center mt-5">
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">Last Login</th>
                    <td className="text-text text-left">{data.profile.last_login? data.profile.last_login : "Unknown"}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">Cuntry Code</th>
                    <td className="text-text text-left">{data.profile.loccountrycode}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">MMR</th>
                    <td className="text-text text-left">{data.computed_mmr? data.computed_mmr : "Unknown"}</td>
                </tr>
            </table>
        </div>
    )
}