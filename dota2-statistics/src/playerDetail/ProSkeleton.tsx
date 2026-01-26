export default function ProSkeleton()
{
    return (
            <div className="w-[90%] mx-auto overflow-x-auto mt-9 animate-pulse">
            <table className="min-w-full">
                <thead>
                <tr className="bg-[#3D3D43] text-text">
                    <th className="text-left px-1 py-1 min-w-[200px]">Player</th>
                    <th className="py-1 min-w-[150px]">Team</th>
                    <th className="py-1 min-w-[80px]">Total</th>
                    <th className="py-1 min-w-[80px]">Win</th>
                    <th className="py-1 min-w-[100px]">Win Rate</th>
                    <th className="py-1 min-w-[140px]">Against Games</th>
                    <th className="py-1 min-w-[140px]">Against Win</th>
                    <th className="py-1 min-w-[140px]">Against Win Rate</th>
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 7 }).map((_, i) => (
                    <tr key={i}>
                    {/* Player */}
                    <td className="py-2 px-2">
                        <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-secondary/40 rounded" />
                        <div className="h-4 w-32 bg-secondary/40 rounded" />
                        </div>
                    </td>

                    {/* Team */}
                    <td className="py-2">
                        <div className="h-4 w-28 bg-secondary/40 rounded" />
                    </td>

                    {/* Total */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Win Rate */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Games */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Win */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                    </td>

                    {/* Against Win Rate */}
                    <td className="py-2 text-center">
                        <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
}