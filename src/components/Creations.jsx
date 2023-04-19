import React from 'react'
import mobileDeep from "../assets/mobile/image-deep-earth.jpg"
import mobileArcade from "../assets/mobile/image-night-arcade.jpg"
import mobileSoccer from "../assets/mobile/image-soccer-team.jpg"
import mobileGrid from "../assets/mobile/image-grid.jpg"
import mobileAbove from "../assets/mobile/image-from-above.jpg"
import mobileBorealis from "../assets/mobile/image-pocket-borealis.jpg"
import mobileCuriosity from "../assets/mobile/image-curiosity.jpg"
import mobileFisheye from "../assets/mobile/image-fisheye.jpg"

const Creations = () => {
  const creations = ["deep earth", "night arcade", "soccer team vr", "the grid", "from up above vr", "pocket borealis", "the curiosity", "make it fisheye"];
  const mobileArray = [mobileDeep, mobileArcade, mobileSoccer, mobileGrid, mobileAbove, mobileBorealis, mobileCuriosity, mobileFisheye];

  return (
    <section id="creations" className="py-14 pb-8 font-josefin">
        <h2 className='text-3xl text-center'>OUR CREATIONS</h2>

        <article className="mt-10 text-white flex flex-col gap-6 items-center">
          {mobileArray.map(image => (
            
            <div key={mobileArray.indexOf(image)} className="bg-cover bg-center w-full" style={{backgroundImage: `url(${image})`}}>
              <div className="p-6 bg-gradient-to-r from-transBlack">
                <h3 className='mt-8 w-[40%] text-2xl'>{creations[mobileArray.indexOf(image)].toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </article>

        <button type="button" className="mt-10 py-2 px-8 tracking-[.35em] block mx-auto font-alata border border-black">SEE ALL</button>
    </section>
  )
}

export default Creations