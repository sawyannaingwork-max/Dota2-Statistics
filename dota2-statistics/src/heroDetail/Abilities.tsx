import { useStatContext } from "../components/HeroDetail"
import AbilityImage from "./AbilityImage"
import { useState, createContext, useContext } from "react"

import heroAbilities from "./../helpers/hero_abilities.json"
import abilities from "./../helpers/abilities.json"
import AbilityDetail from "./AbilityDetail"

const heroAbilityList : Record<string, any> = heroAbilities
const abilityList : Record<string, any> = abilities

// Creating context for showAbility
const showAbilityContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>] | undefined>(undefined)

export default function Abilities()
{   
    // Getting stats
    const stats = useStatContext();

    // Getting the abilities of specific hero
    const thisHeroAbilities : string[] = heroAbilityList[stats.name].abilities

    // Defining the first ability as state
    const [showAbility, setShowAbility] = useState<string>(thisHeroAbilities[0])
    

    return (
        <showAbilityContext.Provider value={[showAbility, setShowAbility]}>
            <div className="mt-9 w-[90%] mx-auto">
                <h2 className="text-2xl font-inter text-text text-center mb-5">Ability Details</h2>
                
                {/* showing ability images */}
                <div className="flex flex-wrap gap-5 justify-center items-center">
                    {
                        thisHeroAbilities.map(function(ability)
                        {
                            return <AbilityImage key={ability} ability={ability} />
                        })
                    }
                </div>

                <div className="flex flex-wrap gap-5 justify-center items-center">
                    {
                        thisHeroAbilities.map(function(ability)
                        {
                            return <AbilityDetail key={ability} ability={ability} />
                        })
                    }
                </div>
            </div>
        </showAbilityContext.Provider>
    )
}

export function useShowAbilityContext()
{
    const context = useContext(showAbilityContext)

    if (!context)
    {
        throw new Error("It must be inside Abilites")
    }

    return context
}