import React from 'react'
import logo from "../assets/logo.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className='text-center font-alata bg-black p-6 pt-10 flex flex-col items-center gap-8'>
        <img src={logo} alt="Loopstudios" className='w-2/5 md:w-1/3' />

        <nav aria-label='Footer Nav' className='text-white'>
            <ul className='space-y-4'>
                <li><a href="#about">About</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Events</a></li>
                <li><a href="#creations">Products</a></li>
                <li><a href="">Support</a></li>
            </ul>
        </nav>

        <section className='mt-4 flex gap-4 items-center'>
            <a href=""><img src={facebook} alt="Facebook" className='w-[25px]' /></a>
            <a href=""><img src={twitter} alt="Twitter" className='w-[25px]' /></a>
            <a href=""><img src={pinterest} alt="Pinterest" className='w-[25px]' /></a>
            <a href=""><img src={instagram} alt="Instagram" className='w-[25px]' /></a>
        </section>

        <p className='text-center text-sm -mt-2 text-gray-darker'>&copy; 2023 Loopstudios. All rights reserved.</p>

        <p className="text-gray-darker text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-[#3e52a3]" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Dev-Dylann" className="text-[#3e52a3]">DevDylan</a>.
        </p>

    </footer>
  )
}

export default Footer