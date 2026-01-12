import abilities from "./../helpers/abilities.json"
import { useShowAbilityContext } from "./Abilities"

const abilityList : Record<string, any> = abilities

export default function AbilityImage({ability} : {ability : string})
{
    const [showAbility, setShowAbility] = useShowAbilityContext()

    if (abilityList[ability].behavior === "Hidden" || abilityList[ability].is_innate)
    {
        return
    }

    return (
        <img onClick={() => setShowAbility(ability)} className={`w-25 cursor-pointer rounded-sm ${showAbility === ability ? "border-2 border-teal-500" : "grayscale-100"}`} src={`https://cdn.cloudflare.steamstatic.com${abilityList[ability].img}`} alt={ability} />
    )
}