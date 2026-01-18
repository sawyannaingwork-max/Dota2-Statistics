import useOpenDota from "../custom/useOpenDota"
import type { ProTeam } from "../types"
import Team from "./../proTeams/Team"
import { useState } from "react"

export default function Teams()
{
    const [search, setSearch] = useState<string>()
    let { data : teams, isFetching , isError} = useOpenDota<ProTeam[]>("proteam", "https://api.opendota.com/api/teams")

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !teams)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    if (search)
    {
        teams = teams.filter(function(team)
        {
            return team.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    const teamArr = teams.map(function(team)
    {
        return(
            <Team 
                key = {team.team_id}
                {...team}
            />
        )
    })

    return(
        <div className="bg-background pt-9 min-h-screen">
            <input className="outline-none w-[90%] border-2 mx-auto block border-text rounded-md py-1 text-text px-2 " type="text" name="team" id="team" placeholder="Search Team" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="w-[90%] mt-9 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {teamArr}
            </div>
        </div>
    )
}