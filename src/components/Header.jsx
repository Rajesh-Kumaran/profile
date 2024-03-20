import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header className="flex justify-between px-5 py-2 bg-primary">
            <a href="#" className="font-bold text-black">R Kumaran</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (<nav className="block md:hidden">
                <ul className="flex flex-col text-white mobile-nav" onClick={() => setToggleMenu(!toggleMenu)}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>)}
            <button
                type='button'
                className='block md:hidden'
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <Bars3Icon className='text-white h-5' />
            </button>
        </header>
    )
}

export default Header

