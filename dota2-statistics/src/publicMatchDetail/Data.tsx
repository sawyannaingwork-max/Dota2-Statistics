import { useRef } from "react"
import { usePublicMatchContext } from "../components/PublicMatchDetail"
import Table from "./Table"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function Data()
{
    const data = usePublicMatchContext()
    const elementRef = useRef<HTMLDivElement | null>(null)

    const radiant = data.players.slice(0, data.players.length / 2)
    const dire = data.players.slice(data.players.length / 2)
    
    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        gsap.from(elementRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.6,
            delay : 3,
            ease : "sine"
        })

    }, { scope : elementRef, dependencies : []})
    return(
        <div ref={elementRef} className="w-[90%] mx-auto mt-9">
            <div>
                <h2 className="text-green-400 text-2xl">Radiant</h2>
                <Table 
                    players = {radiant}
                />
            </div>

            <div className="mt-9">
                <h2 className="text-red-400 text-2xl">Dire</h2>
                <Table 
                    players = {dire}
                />
            </div>
        </div>
    )
}