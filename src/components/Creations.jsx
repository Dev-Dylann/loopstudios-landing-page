import React from 'react'
import mobileDeep from "../assets/mobile/image-deep-earth.jpg"
import mobileArcade from "../assets/mobile/image-night-arcade.jpg"
import mobileSoccer from "../assets/mobile/image-soccer-team.jpg"
import mobileGrid from "../assets/mobile/image-grid.jpg"
import mobileAbove from "../assets/mobile/image-from-above.jpg"
import mobileBorealis from "../assets/mobile/image-pocket-borealis.jpg"
import mobileCuriosity from "../assets/mobile/image-curiosity.jpg"
import mobileFisheye from "../assets/mobile/image-fisheye.jpg"
import desktopDeep from "../assets/desktop/image-deep-earth.jpg"
import desktopArcade from "../assets/desktop/image-night-arcade.jpg"
import desktopSoccer from "../assets/desktop/image-soccer-team.jpg"
import desktopGrid from "../assets/desktop/image-grid.jpg"
import desktopAbove from "../assets/desktop/image-from-above.jpg"
import desktopBorealis from "../assets/desktop/image-pocket-borealis.jpg"
import desktopCuriosity from "../assets/desktop/image-curiosity.jpg"
import desktopFisheye from "../assets/desktop/image-fisheye.jpg"

const Creations = () => {
  const creations = ["deep earth", "night arcade", "soccer team vr", "the grid", "from up above vr", "pocket borealis", "the curiosity", "make it fisheye"];
  const mobileArray = [mobileDeep, mobileArcade, mobileSoccer, mobileGrid, mobileAbove, mobileBorealis, mobileCuriosity, mobileFisheye];
  const desktopArray = [desktopDeep, desktopArcade, desktopSoccer, desktopGrid, desktopAbove, desktopBorealis, desktopCuriosity, desktopFisheye];

  return (
    <section id="products" className="py-14 pb-8 font-josefin max-w-7xl lg:mx-auto lg:my-20">
        <div className='flex justify-center lg:justify-between'>
          <h2 className='text-3xl text-center md:text-4xl'>OUR CREATIONS</h2>

          <button type="button" className="hidden py-2 px-8 tracking-[.35em] font-alata border border-black hover:bg-black hover:text-white transition-all lg:block">SEE ALL</button>
        </div>

        <article className="mt-10 text-white flex flex-col gap-6 items-center md:grid md:grid-cols-2 lg:hidden">
          {mobileArray.map(image => (
            
            <div key={mobileArray.indexOf(image)} className="bg-cover bg-center w-full md:h-full" style={{backgroundImage: `url(${image})`}}>
              <div className="p-6 h-full bg-gradient-to-r from-transBlack md:flex md:items-end">
                <h3 className='mt-8 w-[40%] text-2xl md:w-2/3'>{creations[mobileArray.indexOf(image)].toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </article>
    
        <article className="hidden mt-14 grid-cols-4 gap-6 lg:grid">
            {desktopArray.map(image => (
              <div key={desktopArray.indexOf(image)} className="bg-cover bg-center h-[400px] hover:bg-[size:110%] xl:h-[450px] transition-all cursor-pointer group"
              style={{backgroundImage: `url(${image})`}}>
                <div className="p-6 h-full bg-gradient-to-t from-transBlack flex items-end hover:bg-none group-hover:bg-transWhite transition-all">
                <h3 className='mt-8 text-2xl w-4/5 text-white group-hover:text-black xl:group-hover:text-3xl transition-all'>{creations[desktopArray.indexOf(image)].toUpperCase()}</h3>
              </div>
              </div>
            ))}
        </article>

        <button type="button" className="mt-10 py-2 px-8 tracking-[.35em] block mx-auto font-alata border border-black md:text-lg md:py-3 md:px-12 lg:hidden">SEE ALL</button>
    </section>
  )
}

export default Creations