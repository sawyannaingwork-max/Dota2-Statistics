import type { Rank } from "../components/PublicMatches"
import type { PublicMatch } from "../types"
import useOpenDota from "../custom/useOpenDota"
import MatchCard from "./MatchCard"

export default function Matches({rank} : {rank : Rank})
{
    const { data : matches, isFetching, isError } = useOpenDota<PublicMatch[]>("publicMatchees", "https://api.opendota.com/api/publicMatches")

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    let rankTier;

    
    switch (rank)
    {
        case "hearld":
            rankTier = 1
            break; 
        
        case "guardian":
            rankTier = 2
            break;
        
        case "crusader":
            rankTier = 3
            break;

        case "archon":
            rankTier = 4
            break;

        case "legend":
            rankTier = 5
            break;

        case "ancient":
            rankTier = 6
            break;

        case "divine":
            rankTier = 7
            break;

        default:
            rankTier = 0
    }

    let matchArr;

    if (rankTier)
    {
        matchArr = matches.map(function(match)
        {
            if (Math.floor(match.avg_rank_tier / 10) === rankTier)
            {
                return(
                    <MatchCard 
                        {...match}
                    />
                )
            }
        })
    }

    else 
    {
        matchArr = matches.map(function(match)
        {
            return(
                <MatchCard 
                    {...match}
                />
            )
        })
    }

    return(
        <div className="w-[90%] mx-auto pb-5 mt-9">
            {matchArr}
        </div>
    )

}