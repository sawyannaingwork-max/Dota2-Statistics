import { useState } from "react"

import ButtonList from "../heroes/ButtonList";
import HeroList from "../heroes/HeroList";

export default function Heroes()
{
    const [search, setSearch] = useState("");
    const [type, setType] = useState(null);

    return (
        <div className="py-8 w-[90%] mx-auto max-w-[1300px] min-h-[100vh]">
            <input 
                type="text" 
                name="hero" 
                id="hero"
                placeholder="Search Hero" 
                value = {search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-secondaryCard shadow-md shadow-black rounded-md w-full py-2 px-2 outline-none border-none text-secondaryText"
            />
            <ButtonList 
                type = {type}
                setType = {setType}
            />
            <HeroList 
                search = {search}
                type = {type}
            />
        </div>
    )
}