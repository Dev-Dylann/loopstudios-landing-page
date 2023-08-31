import React from 'react'
import logo from "../assets/logo.svg"
import hamburger from "../assets/icon-hamburger.svg"

const Header = ({ setNavState, navList }) => {
  return (
    <section className="flex justify-between items-center lg:w-full lg:max-w-7xl lg:mx-auto">
        <img src={logo} alt="LoopStudios Logo" className='z-10' />

        <nav aria-label='Desktop Nav' className='hidden font-alata grow justify-end lg:flex'>
          <ul className="flex gap-6 text-lg">
            {navList.map((navItem, index) => (
              <li key={index} className="relative group"><a href={`#${navItem.toLowerCase()}`}>{navItem}</a><span className='absolute left-1/4 -bottom-1.5 w-1/2 h-1 bg-white rounded-full origin-center scale-0 group-hover:scale-100 transition-all'></span></li>
            ))}
          </ul>
        </nav>

        <button type='button' className="lg:hidden" onClick={() => setNavState(prev => !prev)}>
            <img src={hamburger} alt="Open Nav" className="w-6 h-5 md:w-8 md:h-6" />
        </button>
    </section>
  )
}

export default Header