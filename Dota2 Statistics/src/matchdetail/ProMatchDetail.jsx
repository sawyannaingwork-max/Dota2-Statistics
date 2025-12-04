import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"

import { Atom } from "react-loading-indicators";
import OverView from "./OverView"
import Items from "./Items";
import Kill from "./Kill";
import Abilities from "./Abilities";
import { useState } from "react";
import Damage from "./Damage";

export default function ProMatchDetail()
{   
    // Getting the id from url 
    const { id } = useParams();

    const [status, setStatus] = useState("damage")

    // url to fetch
    const url = `https://api.opendota.com/api/matches/${id}`

    // Fetching Data
    const {data : result, isFetching, error} = useOpenDota(id, "Pro Matches Detail", url)

    if (isFetching)
    {
        return (
            <div className="flex justify-center items-center">
                <Atom color="#a8d5a8" size="medium" text="" textColor="" />
            </div>
        ) 
    }

    if (error)
    {
        return <p className="text-LevelThree text-primaryText font-heading">{error}</p>
    }

    return(
        <div className="w-[90%] max-w-[1200px] mx-auto">
            {/* Winner */}
            <div className="flex gap-2 items-center justify-center mt-9">
                <img 
                    className="w-[60px]"
                    src={result.radiant_win? result.radiant_team.logo_url : result.dire_team.logo_url} 
                    alt={result.radiant_win? result.radiant_name : result.dire_name} 
                />
                <h2 className="text-LevelThree font-heading text-primaryText">{result.radiant_win ? result.radiant_name : result.dire_name} Victory</h2>
            </div>
            {/* Versus */}
            <div className="grid grid-cols-3 items-center mt-9 w-full max-w-[600px] mx-auto">
                <div className="flex flex-col gap-1 items-center">
                    <img className="w-[60px]" src={result.radiant_team.logo_url} alt={result.radiant_name} />
                    <h3 className="text-secondaryText text-LevelFive">{result.radiant_name}</h3>
                </div>
                <p className="text-center text-yellow-300 font-stylish text-LevelThree">VS</p>
                <div className="flex flex-col gap-1 items-center">
                    <img className="w-[60px]" src={result.dire_team.logo_url} alt={result.dire_name} />
                    <h3 className="text-secondaryText text-LevelFive">{result.dire_name}</h3>
                </div>
            </div>
            {/* League and Duration */}
            <div className="text-center mt-9">
                <h3 className="text-LevelThree font-heading text-primaryText pb-5">{result.league.name}</h3>
                <p className="text-LevelTwo font-heading text-primaryText">{String(Math.floor(result.duration / 60)).padStart(2, 0)} : {String(result.duration % 60).padStart(2, 0)}</p>
            </div>
            {/* Score */}
            <div className="mt-9">
                <h2 className="text-LevelTwo text-center font-heading text-primaryText">Final Result</h2>
                <div className="grid grid-cols-2 sm:justify-center gap-5 mt-7 w-full max-w-[600px] mx-auto">
                    <div className="flex items-center gap-5 justify-center">
                        <h3 className="text-LevelFour font-heading text-primaryText">{result.radiant_name}</h3>
                        <span className="text-LevelFive text-secondaryText">{result.radiant_score}</span>
                    </div>
                    <div className="flex items-center gap-5 justify-center">
                        <span className="text-LevelFive text-secondaryText">{result.dire_score}</span>
                        <h3 className="text-LevelFour font-heading text-primaryText">{result.dire_name}</h3>
                    </div>
                </div>
            </div>
            {/* Nav */}
            <div className="mt-9">
                <div className="flex flex-nowrap overflow-x-auto md:justify-center">
                    <button className={`px-2 py-1 font-stylish text-primaryText text-LevelFour shrink-0 grow-0 ${status === "overview"? "border-b-2 border-b-primaryText bg-secondaryCard" : ""}`} onClick={() => setStatus("overview")}>OverView</button>
                    <button className={`px-2 py-1 font-stylish text-primaryText text-LevelFour shrink-0 grow-0 ${status === "items"? "border-b-2 border-b-primaryText bg-secondaryCard" : ""}`} onClick={() => setStatus("items")}>Items</button>
                    <button className={`px-2 py-1 font-stylish text-primaryText text-LevelFour shrink-0 grow-0 ${status === "kill"? "border-b-2 border-b-primaryText bg-secondaryCard" : ""}`} onClick={() => setStatus("kill")}>Kills</button>
                    <button className={`px-2 py-1 font-stylish text-primaryText text-LevelFour shrink-0 grow-0 ${status === "abilities"? "border-b-2 border-b-primaryText bg-secondaryCard" : ""}`} onClick={() => setStatus("abilities")}>Abilities</button>
                    <button className={`px-2 py-1 font-stylish text-primaryText text-LevelFour shrink-0 grow-0 ${status === "damage"? "border-b-2 border-b-primaryText bg-secondaryCard" : ""}`} onClick={() => setStatus("damage")}>Damage & Heal</button>
                </div>
                
            </div>

            {/* Radiant Team */}
            <div className="flex items-center gap-1 mb-3 mt-7">
                <img className="w-10" src={result.radiant_team.logo_url} alt={result.radiant_name} />
                <h3 className="text-primaryText font-heading">{result.radiant_name}</h3>
            </div> 

            {
                status === "overview" && 
                <OverView 
                    players={result.players.slice(0, 5)}
                />
            }

            {
                status === "items" && 
                <Items 
                    players={result.players.slice(0, 5)}
                />
            }

            {
                status === "kill" && 
                <Kill 
                    players = {result.players.slice(0, 5)}
                />
            }

            {
                status === "abilities" && 
                <Abilities 
                    players = {result.players.slice(0, 5)}
                />
            }

            {
                status === "damage" && 
                <Damage 
                    players= {result.players.slice(0, 5)}
                />
            }

            
            
            {/* Dire Team */}
            <div className="flex items-center gap-1 mt-7 mb-3">
                <img className="w-10" src={result.dire_team.logo_url} alt={result.dire_name} />
                <h3 className="text-primaryText font-heading">{result.dire_name}</h3>
            </div>
            {
                status === "overview" && 
                <OverView 
                    players={result.players.slice(5)}
                />
            }

            {
                status === "items" && 
                <Items 
                    players={result.players.slice(5)}
                />
            }

            {
                status === "kill" && 
                <Kill 
                    players = {result.players.slice(5)}
                />
            }

            {
                status === "abilities" && 
                <Abilities 
                    players = {result.players.slice(5)}
                />
            }

            {
                status === "damage" && 
                <Damage 
                    players={result.players.slice(5)}
                />
            }
            
        </div>
    )
}