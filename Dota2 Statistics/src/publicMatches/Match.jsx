import heroes from "./../helpers/heroes.json"
import baseUrl from "./../helpers/baseurl"
export default function Match({match_id, radiant_win, avg_rank_tier, radiant_team, dire_team, start_time, duration})
{
    const ranks = ["Hearld", "Guardian", "Cursader", "Archon", "Legend", "Ancient", "Divine", "Immortal"]
    const playedDate = new Date(start_time * 1000)
    
    return(
        <section className="bg-secondaryCard px-4 py-2 my-5 cursor-pointer rounded-md">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-LevelFive text-primaryText font-heading">{radiant_win? "Radiant Win" : "Dire Win"}</h3>
                <h3 className="text-levelSix text-primaryText font-heading">{String(playedDate.getDate()).padStart(2, 0)}/ {String(playedDate.getMonth() + 1).padStart(2, 0)}/ {String(playedDate.getFullYear()).padStart(2, 0)}</h3>
            </div>
            <div className="flex justify-between items-center">
                <h4 className="text-LevelSix text-primaryText font-heading">Average Rank: <span className="text-thirdText">{ranks[Math.floor(avg_rank_tier / 10) - 1]} [{avg_rank_tier % 10}]</span></h4>
                <h4 className="text-LevelSix text-primaryText font-heading">Duration: <span className="text-thirdText">{String(Math.floor(duration / 60)).padStart(2, 0)} : {String(duration % 60).padStart(2, 0)}</span></h4>
            </div>
            <div className="flex justify-between sm:justify-center sm:gap-10 items-center mt-6">
                <div className="flex gap-1 flex-wrap justify-center items-center">
                    {
                        radiant_team.map(function(radiant)
                        {
                            return <img key={radiant} src={baseUrl + heroes[radiant]?.icon} alt={heroes[radiant]?.localized_name} />
                        })
                    }
                </div>
                    <h4 className="text-LevelFour font-stylish text-sky-300">VS</h4>
                <div className="flex gap-1 flex-wrap justify-center items-center">
                    {
                        dire_team.map(function(dire)
                        {
                            return <img key={dire} src={baseUrl + heroes[dire]?.icon} alt={heroes[dire]?.localized_name} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}