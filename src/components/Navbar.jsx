import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
const Navbar = () => {
  return (
    <header className=' padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/"> 
        <img 
        src={headerLogo}
        alt="Logo"
          />
        </a>
        <ul className=' flex-1 flex justify-center items-center
         gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}
              className=' font-monts errat leading-normal text-lg text-slate-gray '>
                {link.label}
              </a>
            </li>
          ) )}
        </ul>
        <div className=' hidden max-lg:block'>
          <img
          src={hamburger}
          alt='Hamburger'
          width={25}
          height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar


