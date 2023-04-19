import React from 'react'
import interactive from '../assets/mobile/image-interactive.jpg'

const About = () => {
  return (
    <section id="about" className="py-4 flex flex-col gap-6 items-center justify-center text-center scroll-mt-12">
        <img src={interactive} alt="Interactive VR" />

        <article className='p-4'>
            <h2 className='font-josefin text-3xl'>THE LEADER IN INTERACTIVE VR</h2>
            <p className='text-gray-darker mt-4'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </article>
    </section>
  )
}

export default About