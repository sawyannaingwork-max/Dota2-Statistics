import { useStatContext } from "../components/HeroDetail"
import heroAbilities from "./../helpers/hero_abilities.json"
import abilities from "./../helpers/abilities.json"

import type { HeroStats, HeroAbility } from "../types"

const heroAbilitiesList : Record<string, any> = heroAbilities
const abilitiesList : Record<string, any> = abilities

export default function Innate()
{
    const stats : HeroStats = useStatContext()

    // Getting the abilities 
    const thisHeroAbilities : string[] = heroAbilitiesList[stats.name].abilities

    // Getting the innate ability
    const thisHeroInnate = thisHeroAbilities.find(function(ability)
    {
        return abilitiesList[ability].is_innate
    })

    if (!thisHeroInnate)
    {
        return <p>No Innate for this Hero.</p>
    }

    // Getting the detail of innate ability
    const innateDetail : HeroAbility = abilitiesList[thisHeroInnate]

    return (
        <div className="w-[90%] mx-auto mt-9">
            <h2 className="text-2xl text-text font-inter text-center">Innate</h2>
            <div className="mt-5 max-w-[1000px] mx-auto">
                <div className="bg-[#3D3D43] px-3 py-2">
                    <h3 className="text-xl text-text font-inter pb-2">{innateDetail.dname}</h3>
                    <p className="text-[#B3B3B3] font-inter font-light text-sm">{innateDetail.desc}</p>
                </div>
                <div className="bg-primary px-3 py-2 text-secondary">
                    <div className="flex gap-5 flex-wrap">
                        <p className="pb-3">Behavoir:
                            <span className="text-text">
                                {
                                    Array.isArray(innateDetail.behavior)? innateDetail.behavior.join(", ") : innateDetail.behavior
                                }
                        </span>
                        </p>
                        {
                            innateDetail.bkbpierce && 
                            <p className="pb-3">BKB Pierce:
                                <span className="text-text">{innateDetail.bkbpierce}</span>
                            </p>
                        }
                        {
                            innateDetail.dispellable && 
                            <p className="pb-3">Dispellable:
                                <span className="text-text">{innateDetail.dispellable}</span>
                            </p>
                        }
                        {
                            innateDetail.target_team && 
                            <p className="pb-3">Target Team:
                                <span className="text-text">{innateDetail.target_team}</span>
                            </p>
                        }
                        {
                            innateDetail.target_type && 
                            <p className="pb-3">Target Type:
                                <span className="text-text">{Array.isArray(innateDetail.target_type)? innateDetail.target_type.join(", ") : innateDetail.target_type}</span>
                            </p>
                        }
                        {
                            innateDetail.dmg_type && 
                            <p className="pb-3">Damage Type:
                                <span className="text-text">{innateDetail.dmg_type}</span>
                            </p>
                        }
                    </div>

                    <div>
                        {
                            innateDetail.attrib.map(function(attr)
                            {
                                return (
                                    <p key={attr.key} className="pb-2">
                                        {attr.header}&nbsp;
                                        <span className="text-text">{Array.isArray(attr.value)? attr.value.join(" /") : attr.value}</span>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}