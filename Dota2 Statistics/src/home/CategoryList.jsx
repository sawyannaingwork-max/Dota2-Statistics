import Category from "./Category"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function CategoryList()
{
    const listRef = useRef();

    const categories = [
        {
            id : 1,
            title : "Heroes",
            description : "The Detail of each hero from stats, abilities to matches, matchups and item recommandation.",
            to : "/heroes",
            exist : true
        },
        {
            id : 2,
            title : "Items",
            description : "The Detail Description of each items.The cost, the effect and the components.",
            to : "/items",
            exist : true
        },
        {
            id : 3,
            title : "Tournments",
            description : "The Info of different Dota2 tournments from the top tier event to fun tournment.",
            to : "/tournments",
            exist : true
        },
        {
            id : 4,
            title : "Public Matches",
            description : "The list and detail of most recent public matches. From the result to item build in that game.",
            to : "/publicMatches",
            exist : true
        },
        {
            id : 5,
            title : "Professional Team",
            description : "The history, the earning, the player, the result and so much more of each pro team.",
            to : "/proTeam",
            exist : true
        },
        {
            id : 6,
            title : "Professional Players",
            description : "The history, the earning, the result and so much more of each pro player.",
            to : "/proPlayer",
            exist : true
        },
        {
            id : 7,
            title : "Professional Matches",
            description : "The list and detail of most recent professional matches. From the result to item build in that game.",
            to : "/proMatches",
            exist : true
        },
        {
            id : 8,
            title : "Authentication",
            description : "Authenticate with your steam account to view your matches, stats and so much more.",
            to : "/",
            exist : false
        }
    ]

    // Creating a list of category component
    const categoryList = categories.map(function(category)
    {
        return (
            <Category 
                key = {category.id}
                {...category}
            />
        )
    })

    useGSAP(function()
    {
        gsap.from(listRef.current, {
            opacity : 0,
            y : 20,
            delay : 0.5,
            duration : 1,
            ease : "linear"
        })
    }, [])
    return(
        <div ref={listRef} className="mt-8 w-[90%] mx-auto pb-5">
            <h2 className="text-primaryText font-heading text-LevelTwo text-center mb-7">Featuring Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryList}
            </div>
        </div>
    )
}