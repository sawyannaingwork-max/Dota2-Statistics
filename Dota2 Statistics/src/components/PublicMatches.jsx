import { Activity, useState } from "react"
import Filter from "../publicMatches/Filter"
import filterImg from "./../assets/filter.svg"
import MatchList from "../publicMatches/MatchesList";

export default function PublicMatches()
{
    const [filterValue, setFilterValue] = useState({
        rank : null,
        gameMode : null,
        lobbyType : null
    })

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="w-[90%] max-w-[1200px] mx-auto">
            <div className="mt-9 flex justify-between items-center">
                <h1 className="text-LevelOne font-heading text-primaryText">Public Matches</h1>
                <button onClick={() => setIsShow(!isShow)} className="primary-btn flex gap-1 hover:bg-primaryText hover:text-background">
                    Filter
                    <img src={filterImg} alt="Filter" />
                </button>
            </div>
            <Activity mode={isShow? "visible" : "hidden"}>
                <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
            </Activity>

            <MatchList
                filterValue = {filterValue}
            />
        </div>
    )
}