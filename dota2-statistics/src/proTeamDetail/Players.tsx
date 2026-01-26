import { useNavigate, useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { ProTeamPlayer } from "../types"
import PlayerSkeleton from "./PlayerSkeleton"

export default function Players()
{
    const navigate = useNavigate()

    function handleClick(id : number | null)
    {
        if (!id)
        {
            return 
        }

        navigate(`/player/${id}`)
    }

    const { id } = useParams()

    const { data : players, isFetching, isError} = useOpenDota<ProTeamPlayer []>(`proTeamPlayer${id}`, `https://api.opendota.com/api/teams/${id}/players`)
    
    if (isFetching)
    {
        return(
            <PlayerSkeleton />
        )
    }

    if (isError || !players)
    {
        return <p>Something went wrong.Try again later.</p>
    }

    const currentPlayers = players.map(function(player)
    {
        if (player.is_current_team_member)
        {
            return (
                <tr key={player.account_id}>
                    <td onClick={() => handleClick(player.account_id)} className={`${player.account_id? "hover:underline cursor-pointer" : ""} text-teal-400 font-itim py-1 text-center`}>{player.name? player.name : "Anonymous"}</td>
                    <td className="text-text py-1 text-center">{player.games_played}</td>
                    <td className="text-green-400 py-1 text-center">{player.wins}</td>
                    <td className="text-green-300 py-1 text-center">{Math.trunc(player.wins / player.games_played * 100 * 100) / 100}%</td>
                </tr>
            )
        }
    })

    const previousPlayers = players.map(function(player)
    {
        if (!player.is_current_team_member)
        {
            return (
                <tr key={player.account_id}>
                    <td onClick={() => handleClick(player.account_id)} className={`${player.account_id? "hover:underline cursor-pointer" : ""} text-teal-400 font-itim py-1 text-center`}>{player.name? player.name : "Anonymous"}</td>
                    <td className="text-text py-1 text-center">{player.games_played}</td>
                    <td className="text-green-400 py-1 text-center">{player.wins}</td>
                    <td className="text-green-300 py-1 text-center">{Math.trunc(player.wins / player.games_played * 100 * 100) / 100}%</td>
                </tr>
            )
        }
    })

    return(
        <div className="w-[90%] mx-auto mt-9 max-w-250">
            <h2 className="text-text text-2xl">Current Players</h2>
            <table className="w-full mt-5">
                <thead className="bg-[#3D3D43]">
                    <tr>
                        <th className="text-text py-1">Player</th>
                        <th className="text-text py-1">Total</th>
                        <th className="text-text py-1">Wins</th>
                        <th className="text-text py-1">Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPlayers}
                </tbody>
            </table>

            <h2 className="mt-9 text-text text-2xl">Previous Players</h2>
            <table className="w-full mt-5">
                <thead>
                    <tr className="bg-[#3D3D43]">
                        <th className="text-text py-1">Player</th>
                        <th className="text-text py-1">Total</th>
                        <th className="text-text py-1">Wins</th>
                        <th className="text-text py-1">Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {previousPlayers}
                </tbody>
            </table>
        </div>
    )
}