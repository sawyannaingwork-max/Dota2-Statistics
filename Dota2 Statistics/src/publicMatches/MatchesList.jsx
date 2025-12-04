import useOpenDota from "../custom/useOpenDota"
import { Atom } from "react-loading-indicators"
import Match from "./Match"
export default function MatchList({filterValue})
{
    let {data : matches, isFetching , error} = useOpenDota("get", "Public Matches", "https://api.opendota.com/api/publicMatches")

    if (matches)
    {
        // Removing all duration 0 (I don't know why i get response for duration 0 :())
        matches = matches.filter(function(match)
        {
            return match.duration > 0;
        })
        
        // Do Filtering
        if (filterValue.rank)
        {
            if (filterValue.rank === 8)
            {
                matches = matches.filter(function(match)
                {
                    return Math.floor(match.avg_rank_tier / 10) >= filterValue.rank
                })
                
            }

            else 
            {
                matches = matches.filter(function(match)
                {
                    return Math.floor(match.avg_rank_tier / 10) === filterValue.rank
                })
            }
            
        }

        if (filterValue.gameMode)
        {
            matches = matches.filter(function(match)
            {
                return match.game_mode === filterValue.gameMode;
            })
        }

        if (filterValue.lobbyType)
        {
            matches = matches.filter(function(match)
            {
                return match.lobby_type === filterValue.lobbyType
            })
        }
    }

    if (isFetching)
    {
        return (
                <div className="flex justify-center items-center">
                    <Atom color="#a8d5a8" size="medium" text="" textColor="" />
                </div>
            )
    }

    if (error)
    {
        return <p className="text-3xl text-primaryText font-heading mt-9">{error}</p>
    }

    if (matches.length === 0)
    {
        return <p>We don't have any public matches that match with your filter value</p>
    }

    return(
        <div>
            {
                matches.map(function(match)
                {
                    return (
                        <Match 
                            key = {match.match_id}
                            {...match}
                        />
                    )
                })
            }
        </div>
    )
}