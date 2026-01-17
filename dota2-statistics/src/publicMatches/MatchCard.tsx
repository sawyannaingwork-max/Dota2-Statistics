import type { PublicMatch } from "../types"
import heroes from "./../helpers/heroes.json"
import { useNavigate } from "react-router-dom"

const heroList : Record<string, any> = heroes


export default function MatchCard( props : PublicMatch)
{

    const navigate = useNavigate()

    if (props.duration === 0)
    {
        return
    }

    // Calculating result
    let result : string

    if (props.radiant_win)
    {
        result = "Radiant Win"
    }

    else 
    {
        result = "Dire Win"
    }

    // Creating Date
    const date = new Date(props.start_time * 1000)

    // Deciding Rank
    let rank : string;

    if (Math.floor(props.avg_rank_tier / 10) === 1)
    {
        rank = `Hearld [${props.avg_rank_tier % 10}]`
    }

    else if (Math.floor(props.avg_rank_tier / 10) === 2)
    {
        rank = `Guardian [${props.avg_rank_tier % 10}]`
    }

    else if (Math.floor(props.avg_rank_tier / 10) === 3)
    {
        rank = `Crusader [${props.avg_rank_tier % 10}]`
    }

    else if (Math.floor(props.avg_rank_tier / 10) === 4)
    {
        rank = `Archon [${props.avg_rank_tier % 10}]`
    }
    
    else if (Math.floor(props.avg_rank_tier / 10) === 5)
    {
        rank = `Legend [${props.avg_rank_tier % 10}]`
    }

    else if (Math.floor(props.avg_rank_tier / 10) === 6)
    {
        rank = `Ancient [${props.avg_rank_tier % 10}]`
    }

    else if (Math.floor(props.avg_rank_tier / 10) === 7)
    {
        rank = `Ancient [${props.avg_rank_tier % 10}]`
    }

    else 
    {
        rank = "Unknown"
    }


    return(
        <div onClick={() => navigate(`/matches/public/${props.match_id}`)} className="cursor-pointer hover:border-accent duration-75 border-2 border-text rounded-md mb-5 px-2 py-2">
            <div className="mb-1 flex justify-between">
                <h4 className="text-accent font-inter">{result}</h4>
                <h4 className="text-text font-inter">{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</h4>
            </div>
            <div className="mb-2 flex justify-between">
                <h4 className="text-secondary">Average Rank: <span className="text-text">{rank}</span></h4>
                <h4 className="text-secondary">Duration: <span className="text-text">{String(Math.floor(props.duration / 60)).padStart(2, "0")} : {String(props.duration % 60).padStart(2, "0")}</span></h4>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex gap-1 flex-wrap justify-center">
                    {
                        props.radiant_team.map(function(heroId, index)
                        {
                            if (!heroId)
                            {
                                return
                            }
                            return(
                                <img key={index} src={`https://cdn.cloudflare.steamstatic.com/${heroList[heroId].icon}`} alt={heroList[heroId].localized_name} />
                            )
                        })
                    }
                </div>
                <div className="text-red-400 font-itim text-2xl">VS</div>
                <div className="flex gap-1 flex-wrap justify-center">
                    {
                        props.dire_team.map(function(heroId, index)
                        {
                            if (!heroId)
                            {
                                return
                            }

                            return(
                                <img key={index} src={`https://cdn.cloudflare.steamstatic.com/${heroList[heroId].icon}`} alt={heroList[heroId].localized_name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}