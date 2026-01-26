export default function ProMatchSkeleton()
{
    return (
            <div className="w-[90%] max-w-250 mx-auto mt-5 animate-pulse">
            <table className="w-full">
                <thead>
                <tr>
                    <th className="text-text py-1 bg-[#3D3D43]">League</th>
                    <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">
                    Date
                    </th>
                    <th className="hidden md:table-cell text-text py-1 bg-[#3D3D43]">
                    Duration
                    </th>
                    <th className="text-text py-1 bg-[#3D3D43]">Result</th>
                    <th className="text-text py-1 bg-[#3D3D43]">KDA</th>
                </tr>
                </thead>

                <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                    <tr key={i} className="border-b border-gray-700/40">
                    {/* League */}
                    <td className="py-2">
                        <div className="h-4 w-40 bg-gray-700 rounded" />
                    </td>

                    {/* Date */}
                    <td className="py-2 hidden md:table-cell">
                        <div className="h-4 w-24 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Duration */}
                    <td className="py-2 hidden md:table-cell">
                        <div className="h-4 w-16 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* Result */}
                    <td className="py-2">
                        <div className="h-4 w-14 mx-auto bg-gray-700 rounded" />
                    </td>

                    {/* KDA */}
                    <td className="py-2">
                        <div className="h-4 w-20 mx-auto bg-gray-700 rounded" />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )
}