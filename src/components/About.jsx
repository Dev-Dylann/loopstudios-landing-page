import React from 'react'
import interactive from '../assets/mobile/image-interactive.jpg'
import desktopInteractive from '../assets/desktop/image-interactive.jpg'

const About = () => {
  return (
    <section id="about" className="py-4 flex flex-col gap-6 items-center justify-center text-center scroll-mt-12 max-w-7xl lg:mx-auto lg:flex-row lg:justify-start lg:p-0 lg:my-10 lg:relative">
        <img src={interactive} alt="Interactive VR" className='lg:hidden'/>
        <img src={desktopInteractive} alt="Interactive VR" className='hidden lg:block w-2/3 self-start'/>

        <article className='p-4 md:px-14 bg-white lg:p-0 lg:pl-10 lg:pt-10 lg:text-left lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 xl:pl-20 xl:pt-20'>
            <h2 className='font-josefin text-3xl md:text-4xl lg:text-5xl'>THE LEADER IN INTERACTIVE VR</h2>
            <p className='text-gray-darker mt-4 md:text-lg xl:text-xl'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </article>
    </section>
  )
}

export default About