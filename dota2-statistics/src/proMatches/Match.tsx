import type { ProTeamMatch } from "../types"
import { useNavigate } from "react-router-dom"

export default function Match(props : ProTeamMatch)
{
    const date = new Date(props.start_time * 1000)
    const navigate = useNavigate()


    return (
        <div onClick={() => navigate(`/matches/pro/${props.match_id}`)} className="cursor-pointer duration-150 hover:border-accent  mb-5 w-[90%] mx-auto border-2 border-text rounded-sm px-2 py-2">
            <h1 className="text-xl text-text font-inter pb-2">{props.league_name}</h1>
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-teal-400 font-inter">
                    {
                        props.radiant_win ? props.radiant_name? props.radiant_name : "Radiant" : props.dire_name? props.dire_name : "Dire"
                    }
                    &nbsp; Victory
                </h3>
                <h3 className="text-teal-300 font-inter">
                    {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
                </h3>
                
            </div>
            <div className="flex justify-center gap-5  items-center">
                <div className="flex gap-4 items-center">
                    <h3 className="text-blue-400 font-itim">{props.radiant_name? props.radiant_name : "Radiant"}</h3>
                    <span className="text-text text-2xl">{props.radiant_score}</span>
                </div>
 
                <div className="text-2xl text-secondary">
                    VS
                </div>

                <div className="flex gap-4 items-center">
                    <span className="text-text text-2xl">{props.dire_score}</span>
                    <h3 className="text-red-400 font-itim">{props.dire_name ? props.dire_name : "Dire"}</h3>
                </div>
            </div>
        </div>
    )
}