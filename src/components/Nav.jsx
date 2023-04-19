import React from 'react'
import logo from "../assets/logo.svg"
import closeNav from "../assets/icon-close.svg"

const Nav = ({ navState, setNavState }) => {
  return (
    <nav aria-label='Mobile Nav' className='fixed z-[5] top-0 right-0 h-full w-full px-6 py-10 bg-black opacity-0 translate-x-full transition-all duration-500 flex flex-col gap-4 md:p-16 md:w-1/2' style={navState ? {opacity: "1", transform: "translateX(0)"} : {}}>
        
        <button type='button' className='self-end mt-1' onClick={() => setNavState(prev => !prev)}>
                <img src={closeNav} alt="Close Nav" className="w-6 h-6" />
        </button>

        <ul onClick={() => setNavState(prev => !prev)} className='grow font-josefin flex flex-col justify-center gap-4 text-3xl'>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="">CAREERS</a></li>
            <li><a href="">EVENTS</a></li>
            <li><a href="#creations">PRODUCTS</a></li>
            <li><a href="">SUPPORT</a></li>
        </ul>
    </nav>
  )
}

export default Nav