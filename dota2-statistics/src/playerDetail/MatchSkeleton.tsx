export default function PlayerMatchRowSkeleton()
{
    return (
        <tr>
            {/* Hero */}
            <td>
                <div className="w-10 h-6 bg-secondary/40 rounded mx-auto my-1" />
            </td>

            {/* Average Rank */}
            <td className="text-center py-1">
                <div className="h-4 w-20 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Result */}
            <td className="text-center py-1">
                <div className="h-4 w-12 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Kills */}
            <td className="text-center py-1">
                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Deaths */}
            <td className="text-center py-1">
                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Assists */}
            <td className="text-center py-1">
                <div className="h-4 w-8 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* GPM */}
            <td className="text-center py-1">
                <div className="h-4 w-14 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* XPM */}
            <td className="text-center py-1">
                <div className="h-4 w-14 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Date */}
            <td className="text-center py-1">
                <div className="h-4 w-24 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Duration */}
            <td className="text-center py-1">
                <div className="h-4 w-16 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Game Mode */}
            <td className="text-center py-1">
                <div className="h-4 w-28 bg-secondary/40 rounded mx-auto" />
            </td>

            {/* Lobby Type */}
            <td className="text-center py-1">
                <div className="h-4 w-28 bg-secondary/40 rounded mx-auto" />
            </td>
        </tr>
    )
}
