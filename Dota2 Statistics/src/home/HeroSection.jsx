import { NavLink } from "react-router-dom"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";

export default function HeroSection()
{   
    const sectionRef = useRef();

    useGSAP(function()
    {
        gsap.from(sectionRef.current, {
            opacity : 0,
            y : 20,
            duration : 1,
            ease : "linear"

        })
    }, [])
    return (
        <div ref={sectionRef} className="hero-section py-20">
            <h1 className="text-LevelOne font-semibold pb-8 text-primaryText w-[90%] mx-auto max-w-[1200px] text-center font-heading">Everything You want to know about Dota2 in One Place</h1>
            <p className="text-primaryBtn pb-7 text-LevelThree w-[90%] mx-auto max-w-[1200px] text-center">
                From Hero Details to Professional Matches and everything related to Dota2 like Items, Torunments, public matches in one single place.
            </p>
            <NavLink to="#" className="hover:bg-secondaryCard hover:text-primaryText duration-300 ease-linear block w-[150px] bg-primaryBtn text-center py-1 rounded-md text-background font-stylish mx-auto">Get Started</NavLink>
        </div>
    )
}