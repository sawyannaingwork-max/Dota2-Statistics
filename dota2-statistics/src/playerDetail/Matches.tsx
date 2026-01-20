import { useParams } from "react-router-dom";
import useOpenDota from "../custom/useOpenDota";
import Match from "./Match";
import type { PlayerMatch } from "../types";
export default function Matches()
{
    const { id } = useParams()

    const { data : matches, isFetching, isError} = useOpenDota<PlayerMatch[]>(`Player Matches ${id}`, `https://api.opendota.com/api/players/${id}/matches`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.Perhap this account is set to private.</p>
    }
    
    return (
        <div className="w-[90%] mx-auto mt-9 overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-[#3D3D43] text-text">
                        <th className="py-1 min-w-[80px]">Hero</th>
                        <th className="py-1 min-w-[120px]">Average Rank</th>
                        <th className="py-1 min-w-[80px]">Result</th>
                        <th className="py-1 min-w-[80px]">K</th>
                        <th className="py-1 min-w-[80px]">D</th>
                        <th className="py-1 min-w-[80px]">A</th>
                        <th className="py-1 min-w-[80px]">GPM</th>
                        <th className="py-1 min-w-[80px]">XPM</th>
                        <th className="py-1 min-w-[120px]">Date</th>
                        <th className="py-1 min-w-[80px]">Duration</th>
                        <th className="py-1 min-w-[80px]">Game</th>
                        <th className="py-1 min-w-[80px]">Lobby</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map(function(match)
                        {
                            return(
                                <Match 
                                    key = {match.match_id}
                                    {...match}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}