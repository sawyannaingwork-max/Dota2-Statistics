export default function PlayerSkeleton()
{
    return (
        <div className="w-[90%] mx-auto mt-9 max-w-250 animate-pulse">

        <div className="text-text font-inter text-2xl mb-5">Current Players</div>

        <table className="w-full">
            <thead className="bg-[#3D3D43]">
            <tr>
                <th className="text-text py-1">Player</th>
                <th className="text-text py-1">Total</th>
                <th className="text-text py-1">Wins</th>
                <th className="text-text py-1">Win Rate</th>
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
                <th className="text-text py-1">Player</th>
                <th className="text-text py-1">Total</th>
                <th className="text-text py-1">Wins</th>
                <th className="text-text py-1">Win Rate</th>
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