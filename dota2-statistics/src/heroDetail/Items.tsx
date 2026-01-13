import { useParams } from "react-router-dom"
import useOpenDota from "../custom/useOpenDota"
import type { RecommandItems } from "./../types"

import itemIds from "./../helpers/item_ids.json"
import items from "./../helpers/items.json"

const itemIdList : Record<string, string> = itemIds
const itemList : Record<string, any> = items

export default function Items()
{
    const {id} = useParams()

    if (!id)
    {
        return <p>Something went wrong. Try again later</p>
    }

    // Fetching recommand items for hero of id
    const {data : recommandItems, isFetching, isError} = useOpenDota<RecommandItems>(`items${id}`, `https://api.opendota.com/api/heroes/${id}/itemPopularity`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !recommandItems)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    return (
        <div className="w-[90%] max-w-[1000px] mx-auto flex flex-wrap justify-between mt-5 sm:grid sm:grid-cols-2">
            <div className="my-4">
                <h2 className="md:text-center text-xl font-inter text-text pb-2">Starting Items</h2>
                <div className="flex gap-1 flex-wrap">
                    {
                        Object.keys(recommandItems?.start_game_items).map(function(key)
                        {
                            return <img key={key} className="w-10" src={`https://cdn.cloudflare.steamstatic.com${itemList[itemIdList[key]].img}`} />
                        })
                    }
                </div>
            </div>

            <div className="my-4">
                <h2 className="md:text-center text-xl font-inter text-text pb-2">Early Game Items</h2>
                <div className="flex flex-wrap gap-1">
                    {
                        Object.keys(recommandItems?.early_game_items).map(function(key)
                        {
                            return <img key={key} className="w-10" src={`https://cdn.cloudflare.steamstatic.com${itemList[itemIdList[key]].img}`} />
                        })
                    }
                </div>
            </div>

            <div className="my-4">
                <h2 className="md:text-center text-xl font-inter text-text pb-2">Mid Game Items</h2>
                <div className="flex gap-1 flex-wrap">
                    {
                        Object.keys(recommandItems?.mid_game_items).map(function(key)
                        {
                            return <img key={key} className="w-10" src={`https://cdn.cloudflare.steamstatic.com${itemList[itemIdList[key]].img}`} />
                        })
                    }
                </div>
            </div>
            <div className="my-4">
                <h2 className="md:text-center text-xl font-inter text-text pb-2">Late Game Items</h2>
                <div className="flex gap-1 flex-wrap">
                    {
                        Object.keys(recommandItems?.late_game_items).map(function(key)
                        {
                            return <img key={key} className="w-10" src={`https://cdn.cloudflare.steamstatic.com${itemList[itemIdList[key]].img}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}