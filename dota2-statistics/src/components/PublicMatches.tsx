import { useState } from "react"
import Filter from "./../publicMatches/Filter"
import Matches from "../publicMatches/Matches"

// Type for rank
export type Rank = "hearld" | "guardian" | "crusader" | "archon" | "legend" | "ancient" | "divine" | null

export default function PublicMatches()
{
    const [rank, setRank] = useState<Rank>(null)


    return (
        <div className=" bg-background">
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