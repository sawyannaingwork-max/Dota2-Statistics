import gameModes from "./../helpers/game_mode.json"
import lobbyTypes from "./../helpers/lobby_type.json"

export default function Filter({filterValue, setFilterValue})
{
    function handleRankFilter(number)
    {
        if (filterValue.rank === number)
        {
            setFilterValue({...filterValue, rank : null})
            return;
        }

        setFilterValue({...filterValue, rank : number})
    }

    function handleModeFilter(number)
    {
        if (filterValue.gameMode === number)
        {
            setFilterValue({...filterValue, gameMode : null})
            return;
        }
        setFilterValue({...filterValue, gameMode : number})
    }

    function handleLobbyFilter(number)
    {
        if (filterValue.lobbyType === number)
        {
            setFilterValue({...filterValue, lobbyType : null})
            return;
        }
        setFilterValue({...filterValue, lobbyType : number})
    }
    return(
        <div className="mt-9">
            <h2 className="text-LevelTwo text-primaryText font-heading">Rank</h2>
            <div className="mt-3 flex gap-5 flex-wrap">
                <button onClick={() => handleRankFilter(1)} className={`secondary-btn ${filterValue.rank === 1 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Hearld</button>
                <button onClick={() => handleRankFilter(2)} className={`secondary-btn ${filterValue.rank === 2 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Guardian</button>
                <button onClick={() => handleRankFilter(3)} className={`secondary-btn ${filterValue.rank === 3 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Crusader</button>
                <button onClick={() => handleRankFilter(4)} className={`secondary-btn ${filterValue.rank === 4 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Archon</button>
                <button onClick={() => handleRankFilter(5)} className={`secondary-btn ${filterValue.rank === 5 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Legend</button>
                <button onClick={() => handleRankFilter(6)} className={`secondary-btn ${filterValue.rank === 6 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Ancient</button>
                <button onClick={() => handleRankFilter(7)} className={`secondary-btn ${filterValue.rank === 7 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Divine</button>
                <button onClick={() => handleRankFilter(8)} className={`secondary-btn ${filterValue.rank === 8 ? "bg-primaryBtn" : "bg-secondaryBtn"}`}>Immortal</button>
            </div>

            <h2 className="text-LevelTwo text-primaryText font-heading mt-9">Game Mode</h2>
            <div className="mt-3 flex gap-5 flex-wrap">
                {
                    Object.keys(gameModes).map(function(key)
                    {
                        return(
                            <button onClick={() => handleModeFilter(gameModes[key].id)} className={`secondary-btn ${filterValue.gameMode === gameModes[key].id? "bg-primaryBtn" : "bg-secondaryBtn"}`} key={gameModes[key].id}>{gameModes[key].name.replace("game_mode_","").replaceAll("_", " ")}</button>
                        )
                    })
                }
            </div>
            
            <h2 className="text-LevelTwo text-primaryText font-heading mt-9">Lobby Type</h2>
            <div className="mt-3 flex gap-5 flex-wrap">
                {
                    Object.keys(lobbyTypes).map(function(key)
                    {
                        return(
                            <button onClick={() => handleLobbyFilter(lobbyTypes[key].id)} className={`secondary-btn ${filterValue.lobbyType === lobbyTypes[key].id? "bg-primaryBtn" : "bg-secondaryBtn"}`} key={lobbyTypes[key].id}>{lobbyTypes[key].name.replace("lobby_type_","").replaceAll("_", " ")}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}