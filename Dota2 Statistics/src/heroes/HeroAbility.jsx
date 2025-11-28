import { useState, useRef, useId } from "react"

import { useIdContext } from "./HeroDetail"

import clock from "./../assets/clock.svg"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

import heroes from "./../helpers/heroes.json"
import heroAbilities from "./../helpers/hero_abilities.json"
import abilities from "./../helpers/abilities.json"
import AbilityImages from "./AbilityImages"

gsap.registerPlugin(ScrollTrigger);

export default function HeroAbility()
{   
    const [currentAbility, setCurrentAbility] = useState(0)
    const id = useIdContext();
    const detailRef = useRef();
    const abilityRef = useRef();

    // Getting hero al abilities 
    const thisHeroAbilitiesAll  = heroAbilities[heroes[id].name].abilities;
    
    // Filtering ablities not to get innate and hidden
    const filteredAbilities = thisHeroAbilitiesAll.filter(function(ability)
    {
        if (abilities[ability].is_innate)
        {
            return false
        }

        return abilities[ability].behavior !== "Hidden"
    })
    
    // Getting the ability Detail 
    const abilityDetail = abilities[filteredAbilities[currentAbility]];

    useGSAP(function()
    {
        gsap.from(detailRef.current, {
            opacity : 0,
            y : 50,
            duration : 1,
            ease : "sine",
            scrollTrigger : {
                trigger : detailRef.current,
                start : "top 70%",
                end : "middle middle"
            }
        })
    }, [])

    useGSAP(function()
    {
        gsap.from(abilityRef.current, {
            y : 20,
            opacity : 0,
            duration : 0.5,
            ease : "sine",
            scrollTrigger : {
                trigger : abilityRef.current,
                start : "top bottom",
                end : "middle middle"
            }
        })
    }, [currentAbility])
    return(
        <div className="mt-9" ref={detailRef}>
            <h2 className="text-center text-LevelTwo font-heading text-primaryText pb-7">Ability Details</h2>
            <AbilityImages 
                abilities = {filteredAbilities}
                currentAbility = {currentAbility}
                setCurrentAbility = {setCurrentAbility}
            />
            <div ref={abilityRef} className="mt-7">
                <div className="bg-card p-2">
                    <h3 className="text-LevelFour pb-2 text-primaryText font-heading">{abilityDetail.dname}</h3>
                    <p className="text-secondaryText font-paragraph">{abilityDetail.desc}</p>
                </div>
                <div className="px-2 py-5 bg-secondaryCard">
                    <div className="flex gap-2 items-center">
                        {
                            abilityDetail.behavior && 
                            <p className="text-thirdText">Behavior: <span className="pl-2 font-bold text-primaryText">{Array.isArray(abilityDetail.behavior)? abilityDetail.behavior.join(", ") : abilityDetail.behavior}</span></p>
                        }
                        {
                            abilityDetail.bkbpierce && 
                            <p className="text-thirdText">BKB Pierce: <span className="pl-2 font-bold text-primaryText">{abilityDetail.bkbpierce}</span></p>
                        }
                    </div>

                    <div className="flex gap-2 items-center">
                        {
                            abilityDetail.dmg_type && 
                            <p className="text-thirdText">Damage Type: <span className="pl-2 font-bold text-primaryText">{abilityDetail.dmg_type}</span></p>
                        }
                        {
                            abilityDetail.dispellable && 
                            <p className="text-thirdText">Dispellable: <span className="pl-2 font-bold text-primaryText">{abilityDetail.dispellable}</span></p>
                        }
                    </div>
                    <div className="flex gap-2 items-center">
                        {
                            abilityDetail.target_team && 
                            <p className="text-thirdText">Target Team: <span className="pl-2 font-bold text-primaryText">{abilityDetail.target_team}</span></p>
                        }
                        {
                            abilityDetail.target_type &&
                            <p className="text-thirdText">Target Type: <span className="pl-2 font-bold text-primaryText">{Array.isArray(abilityDetail.target_type)? abilityDetail.target_type.join(", ") : abilityDetail.target_type}</span></p>
                        }
                    </div>
                    <div>
                        {
                            abilityDetail.attrib.map(function(ability)
                            {
                                return(
                                    <p key={ability.key} className="text-thirdText">{ability.header} <span className="pl-2 font-bold text-primaryText">{Array.isArray(ability.value)? ability.value.join("/ ") : ability.value}</span></p>
                                )
                            })
                        }
                    </div>
                    <div className="flex gap-5 pt-2">
                        {
                            abilityDetail.cd && 
                            <div className="flex gap-2 items-center">
                                <img src={clock} alt="CoolDown" />
                                <span className="text-primaryText font-bold">{Array.isArray(abilityDetail.cd)? abilityDetail.cd.join("/ ") : abilityDetail.cd}</span>
                            </div>
                        }
                        {
                            abilityDetail.mc && 
                            <div className="flex gap-2 items-center">
                                <div className="w-5 h-5 bg-blue-400 rounded-md"></div>
                                <span className="text-primaryText font-bold">{Array.isArray(abilityDetail.mc)? abilityDetail.mc.join("/") : abilityDetail.mc}</span>
                            </div>
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}