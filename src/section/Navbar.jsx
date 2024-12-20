import React, { useState } from 'react'
import { navLinks } from '../constants'
const NavItems = () =>
{
    return (
        <ul className="nav-ul">
            {navLinks.map((item) => (
                <li className="nav-li sm:hover:bg-black " key={item.id} >
                    <a href={item.href} onClick={()=>{}} >{item.name}</a>
                </li>
            ))}
        </ul>
    )
}
export const Navbar = () =>
{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='sticky top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-3 mx-auto c-space">
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Manish
                    </a>
                    <button onClick={() => setIsOpen(() => !isOpen)} className='text-neutral-400 hover:text-white sm:hidden flex' aria-label='toggle menu' >

                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className={` w-5 h-5 lg:hidden transition `} /> </button>
                <nav className='sm:flex hidden'>

                <NavItems />
                </nav>
                </div>
            </div>
<div className={`nav-sidebar bg-black ${isOpen? 'max-h-screen': 'max-h-0' } `}>

    <nav className='p-4'>
        <NavItems />
    </nav>
</div>
        </header>
    )
}
