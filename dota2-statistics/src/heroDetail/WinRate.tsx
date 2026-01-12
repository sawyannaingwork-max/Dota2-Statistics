import { useStatContext } from "../components/HeroDetail";

export default function WinRate()
{
    const stats = useStatContext()

    return(
        <table className="w-[90%] mx-auto text-text mt-5">
            <thead>
                <tr className="bg-[#3D3D43]">
                    <th className="py-1">Rank</th>
                    <th className="py-1">Total</th>
                    <th className="py-1">Win</th>
                    <th className="py-1">WinRate</th>
                </tr>
            </thead>

            <tbody className="font-itim">
                <tr className="text-center">
                    <td className="py-1">Hearld</td>
                    <td className="py-1">{stats["1_pick"]}</td>
                    <td className="py-1">{stats["1_win"]}</td>
                    <td className="py-1">{(stats["1_win"] / stats["1_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Guardian</td>
                    <td className="py-1">{stats["2_pick"]}</td>
                    <td className="py-1">{stats["2_win"]}</td>
                    <td className="py-1">{(stats["2_win"] / stats["2_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Crusader</td>
                    <td className="py-1">{stats["3_pick"]}</td>
                    <td className="py-1">{stats["3_win"]}</td>
                    <td className="py-1">{(stats["3_win"] / stats["3_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Archon</td>
                    <td className="py-1">{stats["4_pick"]}</td>
                    <td className="py-1">{stats["4_win"]}</td>
                    <td className="py-1">{(stats["4_win"] / stats["4_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Legend</td>
                    <td className="py-1">{stats["5_pick"]}</td>
                    <td className="py-1">{stats["5_win"]}</td>
                    <td className="py-1">{(stats["5_win"] / stats["5_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Ancient</td>
                    <td className="py-1">{stats["6_pick"]}</td>
                    <td className="py-1">{stats["6_win"]}</td>
                    <td className="py-1">{(stats["6_win"] / stats["6_pick"] * 100).toFixed(2)}%</td>
                </tr>
                <tr className="text-center">
                    <td className="py-1">Divine</td>
                    <td className="py-1">{stats["7_pick"]}</td>
                    <td className="py-1">{stats["7_win"]}</td>
                    <td className="py-1">{(stats["7_win"] / stats["7_pick"] * 100).toFixed(2)}%</td>
                </tr>
            </tbody>
        </table>
    )
}