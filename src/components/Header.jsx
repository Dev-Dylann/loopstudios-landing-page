import React from 'react'
import logo from "../assets/logo.svg"
import hamburger from "../assets/icon-hamburger.svg"

const Header = ({ setNavState }) => {
  return (
    <section className="flex justify-between items-center">
        <img src={logo} alt="LoopStudios Logo" className='z-10' />

        <button type='button' onClick={() => setNavState(prev => !prev)}>
            <img src={hamburger} alt="Open Nav" className="w-6 h-5 md:w-8 md:h-6" />
        </button>
    </section>
  )
}

export default Header