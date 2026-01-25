import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { PlayerBasicInfo } from "../types"
import Loader from "../components/Loader"
import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function BasicInfo()
{
    // Getting id 
    const { id } = useParams()

    const elementRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError} = useOpenDota<PlayerBasicInfo>(`playerDetail${id}`, `https://api.opendota.com/api/players/${id}`)

    useGSAP(() => {
        const timeline = gsap.timeline()

        const split = new SplitText("#player-name", {
            type : "chars"
        })

        timeline.from(split.chars, {
            opacity : 0,
            y : -10,
            ease : "sine",
            stagger : {
                each : 0.1,
                grid : [2, 4],
            }
        })

        timeline.from("#player-img", {
            scale : 0,
            duration : 0.7,
            ease : "sine",
            opacity : 0
        })

        timeline.from("#player-info", {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "power1"
        })


    }, { scope : elementRef, dependencies : [isFetching]})
    if (isFetching)
    {
        return <Loader />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return (
        <div ref={elementRef} className="w-[90%] mx-auto flex flex-col items-center pt-9">
            <h2 id="player-name" className="text-accent text-2xl font-itim pb-2">{data.profile.personaname}</h2>
            <img id="player-img" className="rounded-md shadow-md shadow-accent" src={data.profile.avatarfull} alt={data.profile.personaname} />
            <table id="player-info" className="text-center mt-5">
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">Last Login</th>
                    <td className="text-text text-left">{data.profile.last_login? data.profile.last_login : "Unknown"}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">Cuntry Code</th>
                    <td className="text-text text-left">{data.profile.loccountrycode}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 font-normal px-5 text-left">MMR</th>
                    <td className="text-text text-left">{data.computed_mmr? data.computed_mmr : "Unknown"}</td>
                </tr>
            </table>
        </div>
    )
}