import { usePublicMatchContext } from "../components/PublicMatchDetail"
import gsap from "gsap"
import { SplitText } from "gsap/all"
gsap.registerPlugin(SplitText)
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function BasicInfo()
{
    const data = usePublicMatchContext()
    const date = new Date(data.start_time * 1000)

    const elementRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {

        if (!elementRef.current)
        {
            return
        }

        const timeline = gsap.timeline()
        const split = new SplitText("#duration", {
            type : "words"
        })

        timeline.from("#winner-info", {
            opacity : 0,
            y : -20,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from(split.words, {
            opacity : 0,
            stagger : 0.2,
            ease : "sine"
        })

        timeline.from("#radiant", {
            x : -20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from("#vs", {
            opacity : 0,
            scale : 0,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from("#dire", {
            x : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })

        return(() => timeline.kill())

    }, { scope : elementRef, dependencies : []})

    return (
        <div ref={elementRef} className="w-[90%] mx-auto pt-9">
            <div id="winner-info" className="flex justify-between lg:justify-start">
                <h3  className="text-xl font-inter text-text">{data.radiant_win? "Radiant Victory" : "Dire Victory"}</h3>
                <h3 className="text-accent">{date.getDate()}/ {date.getMonth() + 1}/ {date.getFullYear()}</h3>
            </div>  
            <p id="duration" className="mt-3 text-secondary">Duration : <span className="text-text">{String(Math.floor(data.duration / 60)).padStart(2, "0")} : {String(data.duration % 60).padStart(2, "0")}</span></p>
            <div className="flex justify-between items-center mt-5">
                <div id="radiant" className="flex items-center gap-5">
                    <h2 className="text-green-400">Radiant</h2>
                    <span className="text-xl text-text font-itim">{data.radiant_score}</span>
                </div>
                <div id="vs" className="text-2xl text-text font-itim">VS</div>
                <div id="dire" className="flex items-center gap-5">
                    <span className="text-xl text-text font-itim">{data.dire_score}</span>
                    <h2 className="text-red-500">Dire</h2>
                </div>
            </div>     
        </div>
    )
}