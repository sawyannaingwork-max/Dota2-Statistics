import { useIdContext } from "./HeroDetail"
import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

import heroes from "./../helpers/heroes.json"
import lores from "./../helpers/hero_lore.json"
import baseurl from "../helpers/baseurl"

import agility from "./../assets/agility.webp"
import intel from "./../assets/intel.webp"
import strength from "./../assets/strength.webp"
import universal from "./../assets/univesal.webp"

import damageIcon from "./../assets/icon_damage 1.png"
import projectileIcon from "./../assets/icon_projectile_speed 1.png"
import attackTimeIcon from "./../assets/icon_attack_time 1.png"
import attackRangeIcon from "./../assets/icon_attack_range 1.png"


import armorIcon from "./../assets/icon_armor 1.png"
import magicDefIcon from "./../assets/icon_magic_resist 1.png"

import turnRateIcon from "./../assets/icon_turn_rate 1.png"
import moveSpeedIcon from "./../assets/icon_movement_speed 1.png"
import visionIcon from "./../assets/icon_vision 1.png"

gsap.registerPlugin(ScrollTrigger);

export default function HeroInfo()
{
    const id = useIdContext();
    const hero = heroes[id]

    // Defining ref
    const heroBasicInfoRef = useRef();
    const heroStatRef = useRef();
    const heroLoreRef = useRef();
    
    // Calculating hp, hp regen, mp and mp regen and armor
    const health = hero.base_health + (hero.base_str * 22);
    const healthRegen = (hero.base_health_regen + (hero.base_str * 0.1)).toFixed(1);

    const mana = hero.base_mana + (hero.base_int * 12);
    const manaRegen = (hero.base_mana_regen + (hero.base_int * 0.05)).toFixed(1)

    const armor = (hero.base_armor + (hero.base_agi * 0.167)).toFixed(1)

    // Calculating min damage and max damage and primary attr
    let minDamage;
    let maxDamage;
    let primaryAttribute;
    let attributeImg;

    switch(hero.primary_attr){
        case "agi":
            minDamage = hero.base_attack_min + hero.base_agi;
            maxDamage = hero.base_attack_max + hero.base_agi;
            primaryAttribute = "Agility";
            attributeImg = agility;
            break; 
        
        case "str":
            minDamage = hero.base_attack_min + hero.base_str;
            maxDamage = hero.base_attack_max + hero.base_str; 
            primaryAttribute = "Strength";
            attributeImg = strength;
            break; 
        
        case "int":
            minDamage = hero.base_attack_min + hero.base_int;
            maxDamage = hero.base_attack_max + hero.base_int;
            primaryAttribute = "Intelligence";
            attributeImg = intel;
            break;

        case "all":
            minDamage = (hero.base_attack_min + (hero.base_int + hero.base_str + hero.base_agi) * 0.45).toFixed();
            maxDamage = (hero.base_attack_max + (hero.base_int + hero.base_str + hero.base_agi) * 0.45).toFixed();
            primaryAttribute = "Universal";
            attributeImg = universal;
            break;
    }

    // Getting hero lore
    const heroLore = lores[hero.name.replace("npc_dota_hero_", "")];

    useGSAP(function()
    {
        const tl = gsap.timeline();

        tl.from(heroBasicInfoRef.current, {
            x : -50,
            opacity : 0,
            duration : 1,
            ease : "sine"
        })
        .from(heroStatRef.current, {
            x : 50,
            opacity : 0,
            duration : 1,
            ease : "sine"
        },
        "-=0.4")

        gsap.from(heroLoreRef.current, {
            opacity : 0,
            y : 50,
            duration : 1,
            ease : "sine",
            scrollTrigger : {
                trigger : heroLoreRef.current,
                start : "top bottom",
                end : "middle middle"
            }
        })
    }, [])
    return(
        <div>
            <div className="w-fll md:flex justify-between pt-9">
                <div ref={heroBasicInfoRef} className="pb-9">
                    <div className="flex gap-2 pb-2 justify-center md:justify-start">
                        <img src={attributeImg} alt={primaryAttribute} />
                        <h5 className="text-LevelSix font-heading text-primaryText">{primaryAttribute}</h5>
                    </div>
                    <h3 className="text-center md:text-left pb-2 text-LevelFive font-bold font-heading text-primaryText">{hero.localized_name}</h3>
                    <div className="flex justify-center gap-7 items-center md:gap-7 md:justify-start">
                        <div className="flex flex-col shadow-md shadow-gray-500">
                            <img className="rounded-sm" src={baseurl + hero.img} alt={hero.localized_name} />
                            <div className="bg-green-400 text-center">{health} + {healthRegen}</div>
                            <div className="bg-blue-700 text-center text-primaryText">{mana} + {manaRegen}</div>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center my-3">
                                <img className="w-6" src={agility} alt="Agility" />
                                <span className="text-secondaryText">{hero.base_agi} + {hero.agi_gain.toFixed(1)}</span>
                            </div>
                            <div className="flex gap-3 items-center my-3">
                                <img className="w-6" src={intel} alt="Intelligence" />
                                <span className="text-secondaryText">{hero.base_int} + {hero.int_gain.toFixed(1)}</span>
                            </div>
                            <div className="flex gap-3 items-center my-3">
                                <img className="w-6" src={strength} alt="Strength" />
                                <span className="text-secondaryText">{hero.base_str} + {hero.str_gain.toFixed(1)}</span>
                            </div>  
                        </div>
                    </div>
                </div>

                <div ref={heroStatRef} className="pb-9">
                    <h3 className="pb-7 text-LevelFour text-center text-primaryText font-heading font-semibold">Stats</h3>
                    <div className="flex gap-9 justify-center">
                        <div>
                            <h3 className="text-center text-LevelFive text-primaryText">Attack</h3>
                            <div className="flex gap-2 items-center py-3">
                                <img src={damageIcon} alt="Damage" />
                                <span className="text-secondaryText text-LevelSix">{minDamage} - {maxDamage}</span>
                            </div>
                            <div className="flex gap-2 items-center py-3">
                                <img src={attackTimeIcon} alt="Turn Rate" />
                                <span className="text-secondaryText text-LevelSix">{hero.attack_rate}</span>
                            </div>
                            <div className="flex gap-2 items-center py-3">
                                <img src={attackRangeIcon} alt="Attack Range" />
                                <span className="text-secondaryText text-LevelSix">{hero.attack_range}</span>
                            </div>
                           
                            <div className="flex gap-2 items-center py-3">
                                <img src={projectileIcon} alt="Projectile" />
                                <span className="text-secondaryText text-LevelSix">{hero.projectile_speed}</span>
                            </div>
                            
                        </div>
                        <div>
                            <h3 className="text-center text-LevelFive text-primaryText">Defnese</h3>
                            <div className="flex gap-2 items-center py-3">
                                <img src={armorIcon} alt="Armor" />
                                <span className="text-secondaryText text-LevelSix">{armor}</span>
                            </div>
                            <div className="flex gap-2 items-center py-3">
                                <img src={magicDefIcon} alt="Magic Defense" />
                                <span className="text-secondaryText text-LevelSix">25%</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-center text-LevelFive text-primaryText">Mobility</h3>
                            <div className="flex gap-2 items-center py-3">
                                <img src={moveSpeedIcon} alt="Movement Speed" />
                                <span className="text-secondaryText text-LevelSix">{hero.move_speed}</span>
                            </div>
                            {
                                hero.turn_rate && 
                                <div className="flex gap-2 items-center py-3">
                                    <img src={turnRateIcon} alt="Turn Rate" />
                                    <span className="text-secondaryText text-LevelSix">{hero.turn_rate}</span>
                                </div>
                            }
                            <div className="flex gap-2 items-center py-3">
                                <img src={visionIcon} alt="Vision" />
                                <span className="text-secondaryText text-LevelSix">{hero.day_vision} / {hero.night_vision}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={heroLoreRef}>
                <h2 className="text-primaryText text-LevelTwo text-center pb-4">Lore</h2>
                <p className="font-paragraph text-LevelSix text-secondaryText text-center">{heroLore}</p>
            </div>
        </div>
    )
}