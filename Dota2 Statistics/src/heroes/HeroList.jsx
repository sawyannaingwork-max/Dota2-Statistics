import heroes from "./../helpers/heroes.json"
import Hero from "./Hero";

export default function HeroList({search, type})
{
    // Filtering heroes base on search and type
    const filteredHeroes = [];

    for (const key in heroes)
    {
        const hero = heroes[key]
        // Check type exists or not
        if (type)
        {
            // Filter according to both type and search
            if (hero.localized_name.toLowerCase().includes(search.toLowerCase()) && hero.primary_attr === type)
            {
                filteredHeroes.push(hero);
            }
        }

        else 
        {
            // Filter according to search
            if (hero.localized_name.toLowerCase().includes(search.toLowerCase()))
            {
                filteredHeroes.push(hero)
            }
        }
    }

    // Creating a list of filtered hero components
    const filteredHeroList = filteredHeroes.map(function(hero)
    {
        return (
            <Hero 
                key = {hero.id}
                id = {hero.id}
                name = {hero.localized_name}
                attribute = {hero.primary_attr}
                attack = {hero.attack_type}
                roles = {hero.roles}
                img = {hero.img}
            />
        )
    })

    return(
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {filteredHeroList}
        </div>
    )
}