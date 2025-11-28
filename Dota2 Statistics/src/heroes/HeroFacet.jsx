import { useRef } from "react";

import { useIdContext } from "./HeroDetail";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import heroes from "./../helpers/heroes.json"
import heroesAbilities from "./../helpers/hero_abilities.json"


gsap.registerPlugin(ScrollTrigger);

export default function HeroFacet()
{
    const id = useIdContext();
    const facetRef = useRef();

    // Getting hero facets
    const facets = heroesAbilities[heroes[id].name].facets;

    useGSAP(function()
    {
        gsap.from(facetRef.current, {
            opacity : 0,
            x : -50,
            duration : 1,
            ease : "sine",
            scrollTrigger : {
                trigger : facetRef.current,
                start : "top 80%",
                end : "middle middle"
            }
        })
    }, [])
    return(
        <div ref={facetRef}>
            <h2 className="text-LevelTwo text-center pb-7 text-primaryText font-heading">Facets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl;grid-cols-3 gap-5">
                {
                    facets.map(function(facet)
                    {
                        return(
                            <div key={facet.id} className="bg-primaryText px-2 py-3 rounded">
                                <h3 className="text-LevelFour text-secondCard">{facet.title}</h3>
                                <p className="text-background font-paragraph">{facet.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}