import baseurl from "../helpers/baseurl"
import itemsDetails from "./../helpers/items.json"
import itemIds from "./../helpers/item_ids.json"

export default function ItemList({items})
{
    return(
        <div className="flex flex-wrap gap-1">
            {
                Object.keys(items).map(function(item)
                {
                    return(
                        <div key={item} className="flex flex-col items-center gap-1">
                            <img className="w-14 rounded-sm" src={baseurl + itemsDetails[itemIds[item]].img} alt={itemIds[item]} />
                            <span className="text-thirdText text-LevelSeven">{items[item]} times</span>
                        </div>
                    )
                })
            }
        </div>
    )
    
    
}