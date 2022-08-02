import React from 'react'
import LogoAlt from '../components/icons/svg/LogoAlt'
import Image from 'next/image'
import HeroeventAnimated from"../components/Animationen/HeroeventAnimated"
import Modale04 from '../components/Modale/Modal04'
import { compose } from 'ol/transform'
const events = () => {
  return (
  
    <section className=" h-screen flex flex-col lg:items-stretch bg-slate-900 lg:justify-center bxorder-t-4 border-amber-400 lg:h-[130vh]">
    <div className="relative flex-1">
    <Image
      layout="fill"
      className="object-bottom transform translate-y-60 lg:translate-y-0 lg:object-top lg:object-scale-down lg:transform lg:scale-y-[100%] lg:scale-x-[75%] bg-slate-900 pointer-events-none "
      src="/Circuszelt.svg" alt="Circuszelt" />
    
   <div className="relative z-1">
          <HeroeventAnimated />
          <div className="block-mx-4 lg:flex flex-wrap items-center lg:items-start justify-around lg:pb-16">
            <div className="flex flex-col justify-center items-center mx-auto mb-1 w-full px-4 md:mb-0 md:w-1/2 lg:block">
              <LogoAlt className="lg:w-96 lg:h-2/6"></LogoAlt>
              <h2 className="text-center font-heading mb-8 max-w-sm text-3xl font-bold leading-tight text-yellow-500 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Privater oder Business Event?
              </h2>
              <p className="mb-8 max-w-lg text-center text-base leading-relaxed text-gray-100 lg:text-xl lg:leading-relaxed">
                Wir planen Ihren Event nach Ihren Vorstellungen und Wünschen. Auch Cataring möglich.
                Weitere Info...
              </p>
              <Modale04></Modale04>
            </div>
            <div className="hidden lg:block -mt-12 bg-slate-800 rounded-2xl w-3/12 px-0 lg:mt-">
              <Image
                height="1149"
                width="1089"
                layout="responsive"
                src="/event01.svg"
                alt="Event Illustration" />
            </div>
          </div>
        </div>
   </div>

        
    </section>  
       

    
   
  )
}

export default events