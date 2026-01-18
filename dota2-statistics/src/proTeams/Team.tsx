import type { ProTeam } from "../types"
import { useNavigate } from "react-router-dom"

export default function Team(props : ProTeam)
{
    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/team/${props.team_id}`)} className="hover:shadow-accent duration-150 cursor-pointer rounded-md flex flex-col items-center shadow-md shadow-blue-400">
            <h2 className="text-accent text-center font-itim text-2xl pb-2">{props.name}</h2>
            {
                props.logo_url && 
                <img className="w-40" src={props.logo_url} alt={props.name} />
            }
            <table>
                <tr>
                    <th className="text-secondary px-5 py-1 font-normal">Rating</th>
                    <td className="text-text font-itim">{props.rating}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 px-5 font-normal">Wins</th>
                    <td className="text-text font-itim">{props.wins}</td>
                </tr>
                <tr>
                    <th className="text-secondary py-1 px-5 font-normal">Losses</th>
                    <td className="text-text font-itim">{props.losses}</td>
                </tr>
            </table>
        </div>
    )
}