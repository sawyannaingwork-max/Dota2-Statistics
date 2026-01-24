import { useProMatchContext } from "../components/ProMatchDetail"
import type { Team } from "../types"
import { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText)

export default function BasicInfo()
{
    const data = useProMatchContext()
    const basicInfoRef = useRef<HTMLDivElement | null >(null)
    // Deciding winner
    let winningTeam : Team | null
    let winnerTeam : string 

    if (data.radiant_win)
    {
        winningTeam = data.radiant_team
        winnerTeam = "Radiant"
    }

    else 
    {
        winningTeam = data.dire_team
        winnerTeam = "Dire"
    }

    useGSAP(() => {
        const timeline = gsap.timeline()

        const split = new SplitText("#winner-name", {
            type : "words"
        })

        timeline.from("#winner-info", {
            x : -20,
            duration : 0.6,
            opacity : 0,
            ease : "sine"
        })

        timeline.from(split.words, {
            opacity : 0,
            stagger : 0.2,
            ease : "sine"
        })

        timeline.from("#tour-info", {
            y : 20,
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from("#first-team", {
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
        
        timeline.from("#second-team", {
            x : 20,
            opacity : 0,
            ease : "sine",
            duration : 0.6
        })

        return(() => {
            timeline.kill()
        })

    }, { scope : basicInfoRef, dependencies : []})
    return (
        <div ref={basicInfoRef} className="w-[90%] mx-auto bg-background pt-9">
            <div id="winner-info" className="flex gap-2 items-center">
                {
                    winningTeam && winningTeam.logo_url && 
                    <img className="w-10" src={winningTeam.logo_url} alt={winningTeam.name? winningTeam.name : winnerTeam} />
                }
                <h2 id="winner-name" className="font-inter text-green-400">{winningTeam?.name? winningTeam.name : winnerTeam} Victory</h2>
            </div>
            <div id="tour-info" className="mt-9 flex justify-between md:justify-start gap-5">
                <h3 className="text-text font-inter">{data.league.name}</h3>
                <h3 className="text-secondary font-inter">Duration: <span className="font-itim text-text">{String(Math.trunc(data.duration / 60)).padStart(2, "0")}:{String(data.dire_score % 60).padStart(2, "0")}</span></h3>
            </div>

            <div className="flex justify-between items-center mt-9 max-w-[600px] mx-auto">
                <div id="first-team" className="flex gap-5 items-center">
                    <div className="flex flex-col items-center gap-1">
                        {
                            data.radiant_team && data.radiant_team.logo_url && 
                            <img className="w-10" src={data.radiant_team.logo_url} alt={data.radiant_team.name? data.radiant_team.name : "Radiant"} />
                        }     
                        <h3 className="font-inter text-text font-normal">{data.radiant_team?.name? data.radiant_team.name : "Radiant"}</h3>    
                    </div>      
                    <span className="text-secondary font-itim text-xl">{data.radiant_score}</span>         
                </div>
                <h2 id="vs" className="text-red-400 text-2xl font-itim font-bold">VS</h2>
                <div id="second-team" className="flex gap-5 items-center">
                    <span className="text-secondary font-itim text-xl">{data.dire_score}</span>
                    <div className="flex flex-col items-center gap-1">
                        {
                            data.dire_team && data.dire_team.logo_url && 
                            <img className="w-10" src={data.dire_team.logo_url} alt={data.dire_team.name? data.dire_team.name : "Dire"} />
                        }     
                        <h3 className="font-inter text-text font-normal">{data.dire_team?.name? data.dire_team.name : "Dire"}</h3>    
                    </div>      
                             
                </div>
            </div>
        </div>
    )
}