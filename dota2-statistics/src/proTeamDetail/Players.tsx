import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { ProTeamPlayer } from "../types"

export default function Players()
{
    const { id } = useParams()

    const { data : players, isFetching, isError} = useOpenDota<ProTeamPlayer []>(`proTeamPlayer${id}`, `https://api.opendota.com/api/teams/${id}/players`)
    
    if (isFetching)
    {
        return (
            <div className="w-[90%] mx-auto mt-9 max-w-250 animate-pulse">
            {/* Current Players */}
            <div className="h-8 w-48 bg-secondary/40 rounded mb-5" />

            <table className="w-full">
                <thead className="bg-[#3D3D43]">
                <tr>
                    {Array.from({ length: 4 }).map((_, i) => (
                    <th key={i} className="py-2">
                        <div className="h-4 w-20 mx-auto bg-secondary/40 rounded" />
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 7 }).map((_, i) => (
                    <tr key={i} className="border-b border-white/5">
                    <td className="py-2">
                        <div className="h-4 w-32 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-20 mx-auto bg-secondary/40 rounded" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Previous Players */}
            <div className="h-8 w-56 bg-secondary/40 rounded mt-10 mb-5" />

            <table className="w-full">
                <thead className="bg-[#3D3D43]">
                <tr>
                    {Array.from({ length: 4 }).map((_, i) => (
                    <th key={i} className="py-2">
                        <div className="h-4 w-20 mx-auto bg-secondary/40 rounded" />
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-white/5">
                    <td className="py-2">
                        <div className="h-4 w-32 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-secondary/40 rounded" />
                    </td>
                    <td className="py-2">
                        <div className="h-4 w-20 mx-auto bg-secondary/40 rounded" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
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
                    <td className="text-teal-400 font-itim py-1 text-center">{player.name? player.name : "Anonymous"}</td>
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
                    <td className="text-teal-400 font-itim py-1 text-center">{player.name? player.name : "Anonymous"}</td>
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