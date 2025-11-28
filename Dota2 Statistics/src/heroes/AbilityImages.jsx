import baseurl from "../helpers/baseurl";
import abilitiesDetail from "./../helpers/abilities.json"

export default function AbilityImages({abilities, currentAbility, setCurrentAbility})
{
    return(
        <div className="flex justify-center flex-wrap gap-3">
            {
                abilities.map(function(ability, index)
                {
                    return(
                        <img 
                            className={`${currentAbility === index? "grayscale-0" : "grayscale" } cursor-pointer max-w-20`}
                            key={index} 
                            src={baseurl + abilitiesDetail[ability].img} 
                            alt={ability} 
                            onClick = {() => setCurrentAbility(index)}
                        />
                    )
                })
            }
        </div>
    )
}