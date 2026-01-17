import type { Rank } from "../components/PublicMatches"

// Type for Filter
interface FilterProps {
    rank : Rank,
    setRank : React.Dispatch<React.SetStateAction<Rank>>
}

export default function Filter({rank, setRank} : FilterProps)
{
    function handleClick(text : Rank)
    {
        if (text === rank)
        {
            setRank(null)
            return
        }

        setRank(text)
    }
    return (
        <div className="w-[90%] mx-auto flex flex-wrap gap-5 pt-9">
            <button onClick={() => handleClick("hearld")} className={`${rank === "hearld"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Hearld</button>
            <button onClick={() => handleClick("guardian")} className={`${rank === "guardian"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Guardian</button>
            <button onClick={() => handleClick("crusader")} className={`${rank === "crusader"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Crusader</button>
            <button onClick={() => handleClick("archon")} className={`${rank === "archon"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Archon</button>
            <button onClick={() => handleClick("legend")} className={`${rank === "legend"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Legend</button>
            <button onClick={() => handleClick("ancient")} className={`${rank === "ancient"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Ancient</button>
            <button onClick={() => handleClick("divine")} className={`${rank === "divine"? "active-btn" : ""} px-2 py-1 bg-secondary text-text rounded-md font-itim duration-150 hover:bg-accent cursor-pointer hover:text-background`}>Divine</button>
        </div>
    )
}