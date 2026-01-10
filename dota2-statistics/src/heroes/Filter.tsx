import type { HeroAttribute } from "./../types";

interface FilterProps {
    search: string;
    setSearch: (value: string) => void;
    filter: HeroAttribute;
    setFilter: (value: HeroAttribute) => void;
}

export default function Filter({search, setSearch, filter, setFilter}: FilterProps) {
    function handleClick(attribute : 'agi' | 'str' | 'int' | 'all')
    {
        if (attribute === filter)
        {
            setFilter(null);
            return
        }

        setFilter(attribute)
    }
    return (
        <div className="pt-9 sticky top-15 z-10 bg-background">
            <input 
                type="text" 
                placeholder="Search for a hero" 
                className="border-2 border-text rounded-sm w-[90%] mx-auto block px-2 py-1 text-text outline-none"
                value = {search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex gap-2 w-[90%] mx-auto pt-6">
                <button onClick={() => handleClick("all")} className={`filter-btn ${filter === "all"? "active-btn" : ""}`}>Universal</button>
                <button onClick={() => handleClick("str")} className={`filter-btn ${filter === "str"? "active-btn" : ""}`}>Strength</button>
                <button onClick={() => handleClick("agi")} className={`filter-btn ${filter === "agi"? "active-btn" : ""}`}>Agility</button>
                <button onClick={() => handleClick("int")} className={`filter-btn ${filter === "int"? "active-btn" : ""}`}>Intelligence</button>
            </div>
        </div>
    )
}