import { useNavigate, useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerPeer } from "../types"
import Loader from "../components/Loader"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import PeerSkeleton from "./PeerSkeleton"

export default function Peers()
{
    const { id } = useParams()

    const navigate = useNavigate()

    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError } = useOpenDota<PlayerPeer[]>(`Player Peers ${id}`, `https://api.opendota.com/api/players/${id}/peers`)

    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        gsap.from(elementRef.current, {
            opacity : 0,
            y : 30,
            duration : 0.6,
            ease : "sine"
        })
    }, { scope : elementRef, dependencies : [isFetching]})
    if (isFetching)
    {
        return <PeerSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later. Perhap this account is set to private.</p>
    }
    
    return(
        <div ref={elementRef} className="w-[90%] mx-auto overflow-x-auto mt-9">
            <table className="min-w-full">
                <thead> 
                    <tr className="bg-[#3D3D43] text-text">
                        <th className="text-left px-1 py-1 min-w-[200px]">Player</th>
                        <th className="py-1 min-w-[80px]">Total</th>
                        <th className="py-1 min-w-[80px]">Win</th>
                        <th className="py-1 min-w-[80px]">Win Rate</th>
                        <th className="py-1 min-w-[120px]">Against Games</th>
                        <th className="py-1 min-w-[120px]">Against Win</th>
                        <th className="py-1 min-w-[120px]">Against Win Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(function(player)
                        {
                            return(
                                <tr key={player.account_id}>
                                    <td className="py-1 px-1">
                                        <div className="flex gap-2 items-center">
                                            <img className="w-10" src={player.avatarfull} alt={player.personaname} />
                                            <h3 onClick={() => navigate(`/player/${player.account_id}`)} className="font-itim text-accent hover:underline cursor-pointer">{player.personaname}</h3>
                                        </div>
                                    </td>
                                    <td className="text-center py-1 text-text">{player.games}</td>
                                    <td className="text-center py-1 text-green-400">{player.win}</td>
                                    <td className="text-center py-1 text-teal-400">{Math.trunc(player.win / player.games * 100 * 100) / 100}%</td>
                                    <td className="text-center py-1 text-red-400">{player.against_games}</td>
                                    <td className="text-center py-1 text-green-400">{player.against_win}</td>
                                    <td className="text-center py-1 text-teal-400">{Math.trunc(player.against_win / player.against_games * 100 * 100) / 100}%</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}