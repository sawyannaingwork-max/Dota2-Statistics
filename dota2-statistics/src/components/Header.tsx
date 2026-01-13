import menuIcon from '../assets/menu.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() 
{
    const [isOpen, setIsOpen] = useState<boolean>(false)


    function handleClick()
    {
        setIsOpen(false)
    }
    return(
        <header className='z-30 sticky top-0 bg-background flex justify-between items-center px-4 py-4'>
            <div className='flex gap-2 items-center'>
                <img onClick={() => setIsOpen(!isOpen)} className='cursor-pointer md:hidden' src={menuIcon} alt="Menu Icon" />
                <h1 className='text-text font-bold text-3xl font-inter'>Dota2 Statistics</h1>
            </div>
            <nav className={`md:relative absolute top-full left-0 text-center w-full overflow-hidden bg-background duration-300 ease-linear md:py-0 md:w-auto md:h-auto ${isOpen? 'h-20 py-2' : 'h-0'}`}>
                <ul className='md:flex gap-2'>
                    <li className='py-1'>
                        <NavLink onClick={handleClick} to="/" className='nav-link'>Home</NavLink>
                    </li>
                    <li className='py-1'>
                        <NavLink onClick={handleClick} to="/heroes" className='nav-link'>Heroes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}