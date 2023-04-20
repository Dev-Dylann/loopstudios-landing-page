import React from 'react'
import logo from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

const Footer = ({ navList }) => {
  const iconArray = [facebook, twitter, pinterest, instagram];

  return (
    <footer className='text-center font-alata bg-black p-6 pt-10 lg:px-16'>
      <div className='flex flex-col items-center gap-8 max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-4'>
        <img src={logo} alt="Loopstudios" className='w-2/5 md:w-1/3 lg:mt-2' />

        <nav aria-label='Footer Nav' className=' text-white lg:order-1'>
            <ul className='flex flex-col gap-4 lg:flex-row'>
                {navList.map(navItem => (
                  <li className='relative group'><a href={`#${navItem.toLowerCase()}`} >{navItem}</a><span className='absolute left-1/4 -bottom-1.5 w-1/2 h-0.5 bg-white rounded-full origin-center scale-0 group-hover:scale-100 transition-all'></span></li>
                ))}
            </ul>
        </nav>

        <section className='mt-4 flex gap-4 items-center justify-end'>
          {iconArray.map(icon => (
            <a href="" className='relative group'><img src={icon} alt="Icon" className='w-[25px]' /><span className='absolute left-0 -bottom-2 w-full h-0.5 bg-white rounded-full origin-center scale-0 group-hover:scale-100 transition-all'></span></a>
          ))}
        </section>

        <p className='text-center text-sm -mt-2 text-gray-darker lg:order-2 lg:text-right lg:h-full lg:pt-2'>&copy; 2023 Loopstudios. All rights reserved.</p>

        <p className="text-gray-darker text-xs col-span-2 lg:order-3">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-[#3e52a3]" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Dev-Dylann" className="text-[#3e52a3]">DevDylan</a>.
        </p>

      </div>
    </footer>
  )
}

export default Footer