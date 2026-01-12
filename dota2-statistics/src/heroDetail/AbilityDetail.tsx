import type { HeroAbility } from "../types"
import abilities from "./../helpers/abilities.json"
import { useShowAbilityContext } from "./Abilities"

const abilityList : Record<string, any> = abilities

export default function AbilityDetail({ability} : {ability : string})
{
    const [showAbility, ] = useShowAbilityContext()

    const abilityDetail : HeroAbility = abilityList[ability]

    if (abilityDetail.behavior === "Hidden")
    {
        return 
    }

    if (abilityDetail.is_innate)
    {
        return 
    }

    return (
        <div className={`mt-5 w-full max-w-[1000px] ${showAbility === ability? "" : "hidden"}`}>
            <div className="bg-[#3D3D43] px-3 py-2">
                <h3 className="text-xl text-text font-inter pb-2">{abilityDetail.dname}</h3>
                <p className="text-[#B3B3B3] font-inter font-light text-sm">{abilityDetail.desc}</p>
            </div>
            <div className="bg-primary px-3 py-2 text-secondary">
                <div className="flex gap-5 flex-wrap">
                    <p className="pb-3">Behavoir:
                        <span className="text-text">
                            {
                                Array.isArray(abilityDetail.behavior)? abilityDetail.behavior.join(", ") : abilityDetail.behavior
                            }
                    </span>
                    </p>
                    {
                        abilityDetail.bkbpierce && 
                        <p className="pb-3">BKB Pierce:
                            <span className="text-text">{abilityDetail.bkbpierce}</span>
                        </p>
                    }
                    {
                        abilityDetail.dispellable && 
                        <p className="pb-3">Dispellable:
                            <span className="text-text">{abilityDetail.dispellable}</span>
                        </p>
                    }
                    {
                        abilityDetail.target_team && 
                        <p className="pb-3">Target Team:
                            <span className="text-text">{abilityDetail.target_team}</span>
                        </p>
                    }
                    {
                        abilityDetail.target_type && 
                        <p className="pb-3">Target Type:
                            <span className="text-text">{Array.isArray(abilityDetail.target_type)? abilityDetail.target_type.join(", ") : abilityDetail.target_type}</span>
                        </p>
                    }
                    {
                        abilityDetail.dmg_type && 
                        <p className="pb-3">Damage Type:
                            <span className="text-text">{abilityDetail.dmg_type}</span>
                        </p>
                    }
                </div>

                <div>
                    {
                        abilityDetail.attrib.map(function(attr)
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

                <div>
                    {
                        abilityDetail.mc && 
                        <p>ManaCost: &nbsp;
                            <span className="text-text">{Array.isArray(abilityDetail.mc)? abilityDetail.mc.join("/ ") : abilityDetail.mc}</span>
                        </p>
                    }
                    {
                        abilityDetail.cd && 
                        <p>Cooldown: &nbsp;
                            <span className="text-text">{Array.isArray(abilityDetail.cd)? abilityDetail.cd.join("/ ") : abilityDetail.cd}</span>
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}