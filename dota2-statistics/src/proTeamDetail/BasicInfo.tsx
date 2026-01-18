import type { ProTeam } from "../types"

export default function BasicInfo(props : ProTeam)
{
    return(
        <div className="pt-9 w-[90%] mx-auto">
            <h2 className="text-center font-itim text-teal-400 text-2xl">{props.name}</h2>
            {
                props.logo_url && 
                <img className="mx-auto w-40 pt-5" src={props.logo_url} alt={props.name} />
            }
            <table className="w-full max-w-[400px] mx-auto text-center mt-5 ">
                <tr>
                    <th className="text-secondary font-inter py-2">Rating</th>
                    <td className="text-text font-itim">{props.rating}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Wins</th>
                    <td className="text-text font-itim">{props.wins}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Losses</th>
                    <td className="text-text font-itim">{props.losses}</td>
                </tr>
                <tr>
                    <th className="text-secondary font-inter py-2">Win Rate</th>
                    <td className="text-text font-itim">{Math.trunc(props.wins / (props.wins + props.losses) * 100 * 100) / 100}%</td>
                </tr>
            </table>
        </div>
    )


}