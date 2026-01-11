import { useStatContext } from "../components/HeroDetail"
import heroAbilities from "./../helpers/hero_abilities.json"
import type { HeroStats, HeroFacets } from "../types"

const abilities : Record<string, any> = heroAbilities

export default function Facet()
{
    const stats : HeroStats = useStatContext()

    // Getting facets
    const facets : HeroFacets[] = abilities[stats.name].facets 

    // Getting facets jsx
    const facetsCompo = facets.map(function(facet)
    {
        return(
            <div key={facet.id} className="bg-primary rounded-md px-4 py-3 shadow-sm shadow-teal-500">
                <h2 className="text-center font-inter text-xl py-2 text-text">{facet.title}</h2>
                <p className="text-gray-400">{facet.description}</p>
            </div>
        )
    })

    return (
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-text text-2xl text-center">Facets</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-5">
                {facetsCompo}
            </div>
        </div>
    )
}