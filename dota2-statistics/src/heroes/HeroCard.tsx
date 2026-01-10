import type { Hero } from "../types";
import agiIcon from "./../assets/agi.webp"
import intIcon from "./../assets/int.webp"
import strIcon from "./../assets/str.webp"
import allIcon from "./../assets/all.webp"


export default function HeroCard({id, name, img, localized_name, primary_attr, roles, attack_type}: Hero)
{
    let icon;
    // Deciding attribute icon
    switch(primary_attr)
    {
        case "agi":
            icon = agiIcon
            break 
        case "int":
            icon = intIcon
            break 
        case "str":
            icon = strIcon
            break 
        case "all":
            icon = allIcon
            break
    }

    return(
        <div className="mx-auto min-w-[300px] sm:min-w-auto sm:mx-0 hover:scale-[1.05] duration-300 ease-linear cursor-pointer">
            <div className="relative">
                <img className="w-full object-cover rounded-md shadow-sm shadow-text" src={`https://cdn.cloudflare.steamstatic.com${img}`} alt={localized_name} />
                <img className="absolute top-2 left-[90%] w-6" src={icon} alt={primary_attr} />
            </div>
            <h3 className="mt-3 text-xl font-inter font-bold text-text">{localized_name}</h3>
            <p className="text-secondary font-inter">{attack_type}</p>
            <p className="text-secondary font-inter">{roles.join(" ")}</p>
        </div>
    )
}