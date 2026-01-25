import { useNavigate, useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { ProTeamMatch } from "../types"
import Loader from "../components/Loader"


export default function Matches({logo_url, name} : {logo_url : string | null, name : string})
{
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isFetching, isError} = useOpenDota<ProTeamMatch[]>(`proTeamMatches${id}`, `https://api.opendota.com/api/teams/${id}/matches`)

    if (isFetching)
    {
        return (
            <div className="w-[90%] mx-auto mt-9 max-w-250 animate-pulse">
            <div className="h-8 w-32 bg-secondary/40 rounded mb-5" />

            {Array.from({ length: 7 }).map((_, i) => (
                <div
                key={i}
                className="shadow-md shadow-blue-500 rounded-md mb-5 py-3 px-3"
                >
                {/* Top row */}
                <div className="mb-3 flex justify-between items-center">
                    <div className="h-4 w-40 bg-secondary/40 rounded" />
                    <div className="h-4 w-28 bg-secondary/40 rounded" />
                </div>

                {/* Duration + Result */}
                <div className="mb-4 flex justify-between items-center">
                    <div className="h-4 w-32 bg-secondary/40 rounded" />
                    <div className="h-4 w-14 bg-secondary/40 rounded" />
                </div>

                {/* Teams */}
                <div className="flex justify-center items-center gap-10">
                    <div className="flex gap-4 items-center">
                    <div className="w-20 h-12 bg-secondary/40 rounded" />
                    <div className="h-6 w-8 bg-secondary/40 rounded" />
                    </div>

                    <div className="h-6 w-8 bg-secondary/40 rounded" />

                    <div className="flex gap-4 items-center">
                    <div className="h-6 w-8 bg-secondary/40 rounded" />
                    <div className="w-20 h-12 bg-secondary/40 rounded" />
                    </div>
                </div>
                </div>
            ))}
            </div>
        )
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const matchArr = data.map(function(match)
    {
        const date = new Date(match.start_time * 1000)

        let result : string

        if ((match.radiant && match.radiant_win) || (!match.radiant && !match.radiant_win))
        {
            result = "Won"
        }

        else 
        {
            result = "Lost"
        }

        return(
            <div onClick={() => navigate(`/matches/pro/${match.match_id}`)} key={match.match_id} className="hover:shadow-accent duration-300 cursor-pointer shadow-md shadow-blue-500 rounded-md mb-5 py-2 px-2">
                <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-text font-normal">{match.league_name}</h3>
                    <h3 className="text-accent">{date.getDate()}/ {date.getMonth() + 1}/ {date.getFullYear()}</h3>
                </div>
                <div className="mb-2 flex justify-between items-center">
                    <p className="text-secondary">Duration: <span className="text-text">{String(Math.floor(match.duration / 60)).padStart(2, "0")} : {String(match.duration % 60).padStart(2, "0")}</span></p>
                    <p className={result === "Won"? "text-green-400" : "text-red-400"}>{result}</p>
                </div>

                <div className="pb-2 flex justify-center items-center gap-10">
                    <div className="flex gap-4 items-center">
                        {
                            logo_url? <img className="w-20" src={logo_url} alt={name} /> : <h3>{name}</h3>
                        }
                        <span className="text-text text-2xl">{match.radiant? match.radiant_score : match.dire_score}</span>
                    </div>

                    <div className="text-red-400 text-3xl">
                        VS
                    </div>

                    <div className="flex gap-4 items-center">
                        <span className="text-2xl text-text">{match.radiant? match.dire_score : match.radiant_score}</span>
                        {
                            match.opposing_team_logo? <img className="w-20" src={match.opposing_team_logo} alt={match.opposing_team_name} /> : <h3>{match.opposing_team_name}</h3>
                        }
                        
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="w-[90%] mx-auto mt-9 max-w-250">
            <h2 className="text-2xl text mb-5 text-text">Matches</h2>
            <div>
                {matchArr}
            </div>
        </div>
    )
}