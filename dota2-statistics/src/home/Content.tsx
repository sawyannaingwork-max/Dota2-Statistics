import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Content()
{
    
    const containerRef = useRef<HTMLDivElement | null>(null)
    const parentRef = useRef<HTMLElement | null>(null)

    const timeline = gsap.timeline()

    const navigate = useNavigate()

    useGSAP(() => {

        const split = new SplitText("#powered-info", {
            type : "words"
        })

        timeline.from(".animate", {
            opacity : 0,
            duration : 1,
            y : 20,
            ease : "back.inOut",
            stagger : 0.2
        })

        timeline.from("#features-container", {
            opacity : 0,
            y : 40,
            duration : 1,
            ease : "elastic"
        })

        timeline.from(split.words, {
            opacity : 0,
            stagger : 0.5,
            duration : 2,
            repeat : -1
        })
        // Animation scroll for each section
        if (containerRef.current)
        {
            const sections : HTMLElement[] = gsap.utils.toArray(containerRef.current.children)

            sections.forEach(function(section)
            {
                gsap.from(section, {
                    x : 50,
                    opacity : 0,
                    ease : "circ",
                    scrollTrigger : {
                        trigger : section,
                        start : "top bottom",
                    }
                })
            })
        }
    }, { scope : parentRef, dependencies : [] })
    return(
        <main ref={parentRef} className="min-h-screen bg-primary">
            <div className="bg-linear-to-b from-secondary to-primary py-9">
                <h1 className="animate text-3xl mx-5 font-inter text-center text-text font-semibold pt-9 pb-8">Everything You want to know about Dota2 in One Place</h1>
                <p className="animate text-2xl mx-5 text-center text-accent font-light font-sans pb-8">
                    From Hero Details to Professional Matches all related to Dota2 in one place.
                </p>
                <button onClick={() => navigate("/heroes")} className="animate btn mx-auto">Get Started</button>
            </div>
            <div id="features-container" className="pt-9 mx-5">
                <h2 className="text-center font-semibold text-2xl font-inter text-text">Featuring Category</h2>
                <div ref={containerRef} className="overflow-x-hidden mt-7 md:grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                    <section className="section bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Heroes</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The Detail of each hero from stats, abilities to matches, matchups and item recommandation.</p>
                        <button onClick={() => navigate("/heroes")} className="btn">Check Out</button>
                    </section>
                    
                    <section className="section bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Public Matches</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The list and detail of most recent public matches. From the result to item build in that game.</p>
                        <button onClick={() => navigate("/public")} className="btn">Check Out</button>
                    </section>
                    <section className="section bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Professional Team</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The player, the result and so much more of each pro team.</p>
                        <button onClick={() => navigate("/team")} className="btn">Check Out</button>
                    </section>
                    <section className="section bg-background mt-5 rounded-md shadow-sm shadow-gray-50 p-5">
                        <h3 className="text-xl text-text mb-2 font-inter">Professional Matches</h3>
                        <p className="font-sans h-20 text-secondary mb-3">The list and detail of professional matches from the result to the item build and so much more.</p>
                        <button onClick={() => navigate("/pro")} className="btn">Check Out</button>
                    </section>
                </div>
            </div>
            <p id="powered-info" className="text-center text-secondary py-9 font-sans text-2xl">This website is powered by <a href="https://www.opendota.com/" target="_blank" className="text-accent">OpenDota</a></p>
        </main>
    )
}