import { useIdContext} from "./HeroDetail";
import useOpenDota from "../custom/useOpenDota";
import { Atom } from "react-loading-indicators";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import ItemList from "./ItemList";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function PopularItems({isToggle})
{
    const id = useIdContext();
    const elementRef = useRef();


    const url = `https://api.opendota.com/api/heroes/${id}/itemPopularity`

    const {data: items, isFetching, error} = useOpenDota(id, "Popular Items", url);

    useGSAP(function()
    {
        if (!elementRef.current)
        {
            return
        }

        gsap.from(elementRef.current, {
            y : 50,
            opacity : 0,
            duration : 2,
            ease : "sine",
            scrollTrigger : {
                trigger : elementRef.current,
                start : "top 80%",
                end : "middle middle"
            }
        })
    }, [items])

    useEffect(function()
    {
        if (!isToggle)
        {
            return;
        }

        if (!elementRef.current)
        {
            return;
        }

        window.scrollTo({
            top : elementRef.current.offsetTop - 70,
            behavior : "smooth"
        })
    }, [])


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
        return <p className="text-primaryText">Something went wrong. Try again later.</p>
    }

    const startingItems = items.start_game_items;
    const earlyItems = items.early_game_items;
    const midItems = items.mid_game_items;
    const lateItems = items.late_game_items;

    return(
        <div ref={elementRef} className="my-9 grid grid-cols-1 md:grid-cols-2">

            <div>
                <h2 className="pb-7 text-primaryText font-heading text-LevelThree text-center">Starting Items</h2>
                <ItemList items={startingItems} />
            </div>


            <div className="mt-6 md:mt-0">
                <h2 className="pb-7 text-primaryText font-heading text-LevelThree text-center">Early Items</h2>
                <ItemList items={earlyItems} />
            </div>


            <div className="mt-6">
                <h2 className="pb-7 text-primaryText font-heading text-LevelThree text-center">Mid Game Items</h2>
                <ItemList items={midItems} />
            </div>


            <div className="mt-6">
                <h2 className="pb-7 text-primaryText font-heading text-LevelThree text-center">Late Game Items</h2>
                <ItemList items={lateItems} />
            </div>

        </div>
    )
}