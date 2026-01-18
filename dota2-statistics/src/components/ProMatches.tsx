import useOpenDota from "../custom/useOpenDota"
import type { ProTeamMatch } from "../types"
import Match from "./../proMatches/Match"


export default function ProMatches()
{
    const { data : matches, isFetching, isError } = useOpenDota<ProTeamMatch[]>("promatches", "https://api.opendota.com/api/proMatches")

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !matches)
    {
        return <p>Something went wrong. Try again later.</p>
    }
    
    // Match compo arr
    const matchesArr = matches.map(function(match)
    {
        return (
            <Match
                key = {match.match_id}
                {...match}
            />
        )
    })

    return(
        <div className="bg-background py-9">
            {matchesArr}
        </div>
    )
}