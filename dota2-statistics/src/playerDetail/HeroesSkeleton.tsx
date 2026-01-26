export default function HeroesSkeleton()
{
    return (
        <div className="w-[90%] mx-auto overflow-x-auto mt-9 animate-pulse">
            <table className="min-w-max mx-auto">
                <thead>
                    <tr className="text-text bg-[#3D3D43]">
                        <th className="py-1 min-w-[80px] sticky left-0">Hero</th>
                        <th className="py-1 min-w-[150px]">Last Played</th>
                        <th className="py-1 min-w-[80px]">Total</th>
                        <th className="py-1 min-w-[80px]">Win</th>
                        <th className="py-1 min-w-[80px]">Win Rate</th>
                        <th className="py-1 min-w-[140px]">With Games</th>
                        <th className="py-1 min-w-[140px]">With Win</th>
                        <th className="py-1 min-w-[140px]">Wint Win Rate</th>
                        <th className="py-1 min-w-[140px]">Against Games</th>
                        <th className="py-1 min-w-[140px]">Against Win</th>
                        <th className="py-1 min-w-[140px]">Against Win Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: 7 }).map((_, i) => (
                        <tr key={i}>
                            {/* Hero (sticky) */}
                            <td className="py-1 sticky left-0 bg-primary">
                                <div className="w-10 h-6 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
                            </td>

                            <td className="py-1">
                                <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
