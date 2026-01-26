export default function MatchupSkeleton()
{
    return (
        <div className="w-[90%] max-w-175 mx-auto mt-5 animate-pulse">
                <table className="w-full text-text">
                    <thead>
                    <tr className="bg-[#3D3D43]">
                        <th className="py-1">Hero</th>
                        <th className="py-1">Total</th>
                        <th className="py-1">Win</th>
                        <th className="py-1">Win Rate</th>
                    </tr>
                    </thead>

                    <tbody>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <tr key={i} className="border-b border-gray-700/40">
                        {/* Hero icon */}
                        <td className="py-2">
                            <div className="w-8 h-8 mx-auto bg-gray-800 rounded" />
                        </td>

                        {/* Total */}
                        <td className="py-2">
                            <div className="h-4 w-12 mx-auto bg-gray-700 rounded" />
                        </td>

                        {/* Win */}
                        <td className="py-2">
                            <div className="h-4 w-12 mx-auto bg-gray-700 rounded" />
                        </td>

                        {/* Win Rate */}
                        <td className="py-2">
                            <div className="h-4 w-16 mx-auto bg-gray-700 rounded" />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}