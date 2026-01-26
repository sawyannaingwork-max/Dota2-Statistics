export default function TeamSkeleton()
{
    return(
        <div
                className="
                    w-[90%]
                    m-5
                    mx-auto
                    rounded-md
                    flex flex-col items-center
                    shadow-md shadow-blue-400
                    animate-pulse
                    px-2 py-3
                "
                >
                {/* Team name */}
                <div className="h-7 w-44 mb-2 bg-gray-700 rounded" />

                {/* Logo */}
                <div className="w-40 h-40 bg-gray-700 rounded mb-2" />

                {/* Table */}
                <table>
                    <tbody>
                    <tr>
                        <th className="px-5 py-1">
                        <div className="h-4 w-14 bg-gray-700 rounded" />
                        </th>
                        <td>
                        <div className="h-4 w-12 bg-gray-700 rounded" />
                        </td>
                    </tr>

                    <tr>
                        <th className="px-5 py-1">
                        <div className="h-4 w-12 bg-gray-700 rounded" />
                        </th>
                        <td>
                        <div className="h-4 w-10 bg-gray-700 rounded" />
                        </td>
                    </tr>

                    <tr>
                        <th className="px-5 py-1">
                        <div className="h-4 w-14 bg-gray-700 rounded" />
                        </th>
                        <td>
                        <div className="h-4 w-10 bg-gray-700 rounded" />
                        </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    )
}