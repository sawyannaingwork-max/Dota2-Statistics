import lores from "./../helpers/hero_lore.json"
import { useStatContext } from "../components/HeroDetail"
import type { HeroStats } from "../types"
import armorIcon from "./../assets/icon_armor 1.png"
import attackRangeIcon from "./../assets/icon_attack_range 1.png"
import attackTimeIcon from "./../assets/icon_attack_time 1.png"
import damageIcon from "./../assets/icon_damage 1.png"
import moveSpeedIcon from "./../assets/icon_movement_speed 1.png"
import projectileSpeedIcon from "./../assets/icon_projectile_speed 1.png"
import turnRateIcon from "./../assets/icon_turn_rate 1.png"
import visionIcon from "./../assets/icon_vision 1.png"
import magicResistIcon from "./../assets/icon_magic_resist 1.png"

import agiIcon from "./../assets/agi.webp"
import intIcon from "./../assets/int.webp"
import strIcon from "./../assets/str.webp"
import allIcon from "./../assets/all.webp"

const heroLores: Record<string, string> = lores

export default function BasicInfo()
{
    const stats : HeroStats  = useStatContext()

    // Choosing attribute icon and attribute type, damage
    let attributeIcon;
    let attributeName;
    let minDamage;
    let maxDamage;

    switch(stats.primary_attr)
    {
        case "agi":
            attributeIcon = agiIcon
            attributeName = "Agility"
            minDamage = stats.base_attack_min + stats.base_agi 
            maxDamage = stats.base_attack_max + stats.base_agi
            break 

        case "int":
            attributeIcon = intIcon
            attributeName = "Intelligence"
            minDamage = stats.base_attack_min + stats.base_int
            maxDamage = stats.base_attack_max + stats.base_int
            break 

        case "str":
            attributeIcon = strIcon
            attributeName = "Strength"
            minDamage = stats.base_attack_min + stats.base_str
            maxDamage = stats.base_attack_max + stats.base_str
            break 
        
        case "all":
            attributeIcon = allIcon
            attributeName = "Universal"
            minDamage = (stats.base_attack_min + (stats.base_agi * 0.7) + (stats.base_int * 0.7) + (stats.base_str * 0.7)).toFixed(0)
            maxDamage = (stats.base_attack_max + (stats.base_agi * 0.7) + (stats.base_int * 0.7) + (stats.base_str * 0.7)).toFixed(0)
            break
    }

    return(
        <div className="mx-auto w-[90%] pt-9">
            <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                    <img src={attributeIcon} alt={attributeName} />
                    <h3 className="text-text text-xl font-inter font-light">{attributeName}</h3>
                </div>
                <h2 className="text-center md:text-left mt-2 text-2xl text-text font-bold font-inter">{stats.localized_name}</h2>
            </div>

            <div className="md:flex justify-between">
                <div>
                    <div className="mt-5 sm:flex items-center gap-5">
                        <div className="flex flex-col w-full max-w-[300px] mx-auto sm:w-auto sm:max-w-auto sm:mx-auto">
                            <img src={`https://cdn.cloudflare.steamstatic.com${stats.img}`} alt={stats.localized_name} />
                            <p className="bg-green-400 text-center text-text font-itim">
                                <span className="mx-5">{stats.base_health + stats.base_str * 22}</span>
                                <span className="text-background">+{(stats.base_health_regen + stats.base_str * 0.1).toFixed(1)}</span>
                            </p>

                            <p className="bg-blue-500 text-center text-text font-itim">
                                <span className="mx-5">{stats.base_mana + stats.base_int * 12}</span>
                                <span className="text-background">+{(stats.base_mana_regen + stats.base_int * 0.05).toFixed(1)}</span>
                            </p>
                        </div>

                        <div className="w-full max-w-[300px] mx-auto mt-5 sm:w-auto sm:max-w-auto sm:mx-auto">
                            <div className="flex justify-center items-center gap-3 my-3">
                                <img className="w-6" src={agiIcon} alt="Aiglity" />
                                <p className="text-text font-itim text-xl">{stats.base_agi} + <span className="text-sm text-secondary">{stats.agi_gain}</span></p>
                            </div>
                            <div className="flex justify-center items-center gap-3 my-3">
                                <img className="w-6" src={intIcon} alt="Intelligence" />
                                <p className="text-text font-itim text-xl">{stats.base_int} + <span className="text-sm text-secondary">{stats.int_gain}</span></p>
                            </div>
                            <div className="flex justify-center items-center gap-3 my-3">
                                <img className="w-6" src={strIcon} alt="Strength" />
                                <p className="text-text text-xl font-itim">{stats.base_str} + <span className="text-sm text-secondary">{stats.str_gain}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-9 md:mt-0">
                    <h3 className="text-center font-inter text-2xl text-text">Stats</h3>
                    <div className="flex justify-between mt-6 md:gap-5 lg:gap-10">
                        <div>
                            <h3 className="text-center pb-3 text-text font-inter">ATTACK</h3>
                            <div className="flex gap-5 items-center">
                                <img src={damageIcon} alt="Damage" />
                                <p className="text-text font-itim">{minDamage} - {maxDamage}</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={attackTimeIcon} alt="Attack Time" />
                                <p className="text-text font-itim">{stats.attack_rate}</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={attackRangeIcon} alt="Attack Range" />
                                <p className="text-text font-itim">{stats.attack_range}</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={projectileSpeedIcon} alt="Projectile Speed" />
                                <p className="text-text font-itim">{stats.projectile_speed}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-center pb-3 text-text font-inter">DEFENSE</h3>
                            <div className="flex gap-5 items-center">
                                <img src={armorIcon} alt="Armor" />
                                <p className="text-text font-itim">{stats.base_armor}</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <img src={magicResistIcon} alt="Magic Resistence" />
                                <p className="text-text font-itim">{stats.base_mr}%</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-center pb-3 text-text font-inter">MOBILITY</h3>
                            <div className="flex gap-5 items-center">
                                <img src={moveSpeedIcon} alt="Movement Speed" />
                                <p className="text-text font-itim">{stats.move_speed}</p>
                            </div>
                            {
                                stats.turn_rate && 
                                <div className="flex gap-5 items-center">
                                    <img src={turnRateIcon} alt="Turn Rate" />
                                    <p className="text-text font-itim">{stats.turn_rate}</p>
                                </div>
                            }
                            <div className="flex gap-5 items-center">
                                <img src={visionIcon} alt="Vision" />
                                <p className="text-text font-itim">{stats.day_vision} - {stats.night_vision}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-9">
                <h2 className="text-center text-text font-inter text-2xl">Lore</h2>
                <p className="mt-5 font-inter text-secondary text-center">{heroLores[stats.name.replace("npc_dota_hero_", "")]}</p>
            </div>
        </div>
    )
}