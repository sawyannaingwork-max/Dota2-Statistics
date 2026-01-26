import { useEffect, useState } from "react"
import Filter from "./../publicMatches/Filter"
import Matches from "../publicMatches/Matches"

// Type for rank
export type Rank = "hearld" | "guardian" | "crusader" | "archon" | "legend" | "ancient" | "divine" | null

export default function PublicMatches()
{
    const [rank, setRank] = useState<Rank>(null)

    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    return (
        <div className="bg-background min-h-screen">
            <Filter 
                rank = {rank}
                setRank = {setRank}
            />
            <Matches 
                rank = {rank}
            />
        </div>
    )
}