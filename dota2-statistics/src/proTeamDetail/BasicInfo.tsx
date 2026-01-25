import { useRef } from "react"
import type { ProTeam } from "../types"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText)


export default function BasicInfo(props : ProTeam)
{
    const basicInfoRef = useRef<HTMLDivElement | null>(null)
    
    useGSAP(() => {

        const timeline  = gsap.timeline()

        const split = new SplitText("#team-name", {
            type : "chars"
        })

        // Aniamation team name
        timeline.from(split.chars, {
            opacity : 0,
            ease : "elastic",
            duration : 0.6,
            stagger : {
                each : 0.1,
                grid : [3,4],
                from : "center"
            },
            y : -20,
        })

        // Animation teal logo
        timeline.from("#team-img", {
            opacity : 0,
            scale : 0,
            duration : 0.6,
            ease : "sine"
        })

        // animation table
        timeline.from("#basic-info", {
            y : 20,
            opacity : 0,
            ease : "sine",
            duration : 0.5
        })

        return(() => {
            timeline.kill()
            split.revert()
        })

    }, { scope : basicInfoRef, dependencies : []})

    return(
        <div ref={basicInfoRef} className="pt-9 w-[90%] mx-auto">
            <h2 id="team-name" className="text-center font-itim text-teal-400 text-2xl">{props.name}</h2>
            {
                props.logo_url && 
                <img id="team-img" className="mx-auto w-40 pt-5" src={props.logo_url} alt={props.name} />
            }
            <table id="basic-info" className="w-full max-w-100 mx-auto text-center mt-5 ">
                <tbody>
                    <tr>
                        <th className="text-secondary font-inter py-2">Rating</th>
                        <td className="text-text font-itim">{props.rating}</td>
                    </tr>
                    <tr>
                        <th className="text-secondary font-inter py-2">Wins</th>
                        <td className="text-text font-itim">{props.wins}</td>
                    </tr>
                    <tr>
                        <th className="text-secondary font-inter py-2">Losses</th>
                        <td className="text-text font-itim">{props.losses}</td>
                    </tr>
                    <tr>
                        <th className="text-secondary font-inter py-2">Win Rate</th>
                        <td className="text-text font-itim">{Math.trunc(props.wins / (props.wins + props.losses) * 100 * 100) / 100}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}