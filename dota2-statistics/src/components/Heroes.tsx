import Filter from "./../heroes/Filter"
import { useEffect, useState } from "react"
import type { HeroAttribute } from "../types"
import HeroList from "../heroes/HeroList"

export default function Heroes() {
    const [search, setSearch] = useState<string>("")
    const [filter, setFilter] = useState<HeroAttribute>(null)

    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    return (
        <div className="bg-background min-h-screen">
            <Filter 
                search = {search}
                setSearch = {setSearch}
                filter = {filter}
                setFilter = {setFilter}
            />
            <HeroList 
                search = {search}
                filter = {filter}
            />
        </div>
    )
}