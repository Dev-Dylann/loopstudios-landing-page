import React from 'react'

const Newsletter = () => {
  return (
    <section className='py-6 -mt-32 mb-10 rounded-lg bg-white border border-black flex flex-col gap-4 max-w-7xl md:mx-10 lg:mx-0 lg:rounded-none lg:grid lg:grid-cols-2 lg:text-left xl:px-8 xl:mx-auto xl:gap-16'>
        <article className='p-4 flex flex-col sm:px-6 xl:px-0'>
            <h2 className='font-josefin text-3xl md:text-4xl'>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p className='text-gray-darker md:text-lg'>Be the first to first to know of our latest innovations.</p>
        </article>

        <form action="" className='flex flex-col p-4 sm:px-6 md:px-10 lg:justify-center xl:px-0'>
            <input type="email" placeholder='E-mail' className='border border-gray-dark rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker md:text-lg' />

            <button type="submit" className='mt-4 mx-auto py-2 px-8 tracking-[.35em] font-alata border border-black hover:bg-black hover:text-white transition-all md:text-lg md:py-3 md:px-12 xl:mx-0 xl:w-fit xl:self-end'>SUBSCRIBE</button>
        </form>
    </section>
  )
}

export default Newsletter