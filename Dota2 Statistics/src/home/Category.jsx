import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Category({title, description, exist, to})
{
    const categoryRef = useRef();

    useGSAP(function()
    {
        gsap.from(categoryRef.current, {
            opacity : 0,
            y : 10,
            x: 10,
            duration : 1,
            ease : "power4",
            scrollTrigger : 
            {
                trigger: categoryRef.current,
                start: 'top bottom',
                end: 'center center',
                scrub: false
            }
        })
    }, [])

    return(
        <section ref={categoryRef} className="bg-card rounded-md p-5">
            <h3 className="text-primaryText font-heading text-LevelFour pb-3">{title}</h3>
            <p className="pb-3 text-secondaryText font-paragraph text-LevelSix">{description}</p>
            {
                exist?
                <NavLink className="primary-btn" to={to}>CheckOut</NavLink> : 
                <NavLink className="primary-btn" to={to}>Comming Soon</NavLink>
            }
            
        </section>
    )
}