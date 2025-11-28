import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import baseurl from "../helpers/baseurl";
import agility from "./../assets/agility.webp"
import strength from "./../assets/strength.webp"
import universal from "./../assets/univesal.webp"
import intel from "./../assets/intel.webp"



export default function Hero({id, name, attribute, attack, roles, img})
{   
    const navigate = useNavigate();
    const heroRef = useRef();

    let attributeImg;
    let className;
    
    switch(attribute){
        case "agi":
            attributeImg = agility
            className = "shadow-agility"
            break 

        case "str":
            attributeImg = strength
            className = "shadow-strength"
            break 

        case "int":
            attributeImg = intel
            className = "shadow-intel"
            break 
        
        case "all":
            attributeImg = universal
            className = "shadow-universal"
            break
    }

    return(
        <section onClick={() => navigate(`${id}`)} ref={heroRef} className={`cursor-pointer hover:scale-105 duration-100 ease-linear bg-secondaryCard rounded-md pb-2 ${className}`}>
            <div className="relative mb-3">
                <img className="w-full rounded-md" src={baseurl + img} alt="{name}" />
                <img className="absolute w-6 top-2 left-[calc(100%-30px)]" src={attributeImg} alt={attribute} />
            </div>
            <h2 className="pb-1 px-2 text-LevelFive font-heading font-semibold text-primaryText p">{name}</h2>
            <p className="font-heading text-secondaryText px-2 pb-1">{attack}</p>
            <p className="font-heading text-secondaryText px-2">{roles.join(", ")}</p>
        </section>
    )
}