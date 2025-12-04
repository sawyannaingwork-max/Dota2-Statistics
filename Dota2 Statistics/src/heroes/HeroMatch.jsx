import { useNavigate } from "react-router-dom";

export default function HeroMatch({match_id, duration,league_name, player_slot, radiant_win, kills, deaths, assists})
{

    const navigate = useNavigate();

    const minutes = String(Math.floor(duration / 60)).padStart(2, 0);
    const seconds = String(duration % 60).padStart(2, 0);

    let result;
    // Calculating result 
    if ((((player_slot >= 0 && player_slot <= 4) && radiant_win)) || (((player_slot >= 128 && player_slot <= 132) && !radiant_win)))
    {
        result = "Win";
    }

    else 
    {
        result = "Lose"
    }
    
    return(
        <section onClick={() => navigate(`/matches/pro/${match_id}`)} className="border-2 border-transparent grid grid-cols-[2fr_1fr_1fr_1fr] p-2 text-center rounded-md md:grid-cols-4 cursor-pointer hover:border-2 hover:border-primaryText duration-300 ease-linear">
            <p className="text-primaryText font-heading text-left">{league_name}</p>
            <p className={result === "Win"? "text-green-400" : "text-red-500"}>{result}</p>
            <p className="text-primaryText font-heading">{minutes}:{seconds}</p>
            <p className="text-primaryText font-heading text-right">{String(kills).padStart(2, 0)} /{String(deaths).padStart(2, 0)} /{String(assists).padStart(2, 0)}</p>
        </section>
    )
}