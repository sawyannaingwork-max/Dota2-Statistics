import { useIdContext } from "./HeroDetail"
import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

import heroAbilities from "./../helpers/hero_abilities.json"
import abilities from "./../helpers/abilities.json"
import heroes from "./../helpers/heroes.json"

import clock from "./../assets/clock.svg"

gsap.registerPlugin(ScrollTrigger);

export default function HeroInnate()
{
    const id = useIdContext();

    const innateRef = useRef();

    const heroName = heroes[id].name;

    // Getting hero abilities
    const thisHeroAbilities = heroAbilities[heroName].abilities;

    let innateAbility = thisHeroAbilities.filter(function(ability)
    {
        return abilities[ability].is_innate;
    })[0]

    // Getting the detail info of annateAbility
    innateAbility = abilities[innateAbility]

    useGSAP(function()
    {
        gsap.from(innateRef.current, {
            opacity : 0,
            y : 50,
            duration : 1,
            ease : "sine",
            scrollTrigger : {
                trigger : innateRef.current,
                start : "top 80%",
                end : "middle middle"
            }
        })
    }, [])

    return(
        <div ref={innateRef} className="py-9">
            <h2 className="pb-7 text-LevelTwo text-center text-primaryText font-heading">Innate Ability</h2>
            <div className="bg-card p-2">
                <h3 className="text-LevelFour text-primaryText font-heading pb-2">{innateAbility.dname}</h3>
                <p className="text-LevelSix font-paragraph text-secondaryText">
                    {innateAbility.desc}
                </p>
            </div>
            <div className="bg-secondaryCard px-2 py-5">
                <div>
                    <p className="text-thirdText">Behavior: <span className="pl-2 font-bold text-primaryText">{Array.isArray(innateAbility.behavior)? innateAbility.behavior.join(", ") : innateAbility.behavior}</span></p>
                    {
                        innateAbility.bkbpierce &&
                        <p className="text-thirdText">BKB Pierce: <span className="pl-2 font-bold text-primaryText">{innateAbility.bkbpierce}</span></p>
                    }
                </div>
                <div>
                    {
                        innateAbility.attrib.map(function(ability)
                        {
                            return <p className="text-thirdText" key={ability.key}>{ability.header} <span className="text-primaryText font-bold pl-2">{Array.isArray(ability.value)? ability.value.join("/") : ability.value}</span></p>
                        })
                    }
                </div>
                <div className="flex gap-5 pt-2">
                    {
                        innateAbility.cd && 
                        <div className="flex gap-2 items-center">
                            <img src={clock} alt="CoolDown" />
                            <span className="text-primaryText font-bold">{Array.isArray(innateAbility.cd)? innateAbility.cd.join("/") : innateAbility.cd}</span>
                        </div>
                    }
                    {
                        innateAbility.mc && 
                        <div className="flex gap-2 items-center">
                            <div className="w-5 h-5 bg-blue-400 rounded-md"></div>
                            <span className="text-primaryText font-bold">{Array.isArray(innateAbility.mc)? innateAbility.mc.join("/") : innateAbility.mc}</span>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}