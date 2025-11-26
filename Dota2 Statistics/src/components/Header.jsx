import { NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

import menu from "./../assets/menu.svg"

export default function Header()
{   
    const NavigationRef = useRef();
    const ProfessionalRef = useRef();

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProOpen, setIsProOpen] = useState(false);

    function handleMenuClick(e)
    {
        e.stopPropagation();
        setIsNavOpen(!isNavOpen);
    }

    function handleProClick()
    {
        setIsProOpen(!isProOpen);

    }
    useEffect(function()
    {
       function closeMenu()
       {
            setIsNavOpen(false);
       } 

       if (!NavigationRef.current)
       {
            return;
       }

       document.addEventListener("click", closeMenu)

       return () => document.removeEventListener("click", closeMenu)
    }, [])

    return (
        <header className="relative bg-background h-[70px] flex justify-between items-center px-5">
            <div className="flex gap-2 items-center">
                <img onClick={handleMenuClick} src={menu} alt="Menu Icon" className="cursor-pointer lg:hidden" />
                <h1 className="text-LevelOne font-inter text-primaryText">Dota2 Statistics</h1>
            </div>
            <nav ref={NavigationRef} className={`${isNavOpen? "w-[200px] p-5" : "w-0"} z-10 duration-300 ease-linear lg:overflow-visible overflow-hidden absolute top-[100%] left-0 h-[calc(100vh-70px)] bg-secondaryCard lg:w-auto lg:relative lg:bg-transparent lg:top-0 lg:h-auto`}>
                <ul className="lg:flex">
                    <li className="my-2 lg:my-0 lg:mx-5"><NavLink className="nav-link" to="#">Home</NavLink></li> 
                    <li className="my-2 lg:my-0 lg:mx-5"><NavLink className="nav-link" to="#">Heroes</NavLink></li>
                    <li className="my-2 lg:my-0 lg:mx-5"><NavLink className="nav-link" to="#">Items</NavLink></li>
                    <li className="my-2 lg:my-0 lg:mx-5"><NavLink className="nav-link" to="#">Tournments</NavLink></li>
                    <li className="my-2 lg:my-0 lg:mx-5"><NavLink className="nav-link" to="#">Public Matches</NavLink></li>
                    <li onClick={handleProClick} className="lg:cursor-pointer my-2 lg:relative lg:my-0 lg:mx-5 text-LevelSix text-primaryText font-paragraph">
                        Professional
                        <ul ref={ProfessionalRef} className={`${isProOpen? "lg:w-[170px] lg:px-3" : "lg:w-0 lg:px-0"} px-3 overflow-hidden lg:rounded-md z-10 lg:bg-secondaryCard lg:absolute lg:top-[100%] lg:right-0`}>
                            <li className="my-2 lg:my-2"><NavLink className="nav-link" to="#">Pro Player</NavLink></li>
                            <li className="my-2 lg:my-2"><NavLink className="nav-link" to="#">Pro Matches</NavLink></li>
                            <li className="my-2 lg:my-2"><NavLink className="nav-link" to="#">Pro Team</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}