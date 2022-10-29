import React from 'react'
import LogoAlt from '../components/icons/svg/logoAlt'
import Image from 'next/image'
import HeroeventAnimated from '../components/Animationen/HeroeventAnimated'
import Modale04 from '../components/Modale/Modal04'
import { compose } from 'ol/transform'
const events = () => {
  return (
    <section className=" bxorder-t-4 flex h-[125vh] flex-col border-amber-400 bg-slate-900 lg:h-[130vh] lg:items-stretch lg:justify-center">
      <div className="relative flex-1">
        <Image
          layout="fill"
          className="pointer-events-none translate-y-60 transform bg-slate-900 object-bottom lg:translate-y-0 lg:scale-y-[100%] lg:scale-x-[75%] lg:transform lg:object-scale-down lg:object-top "
          src="/Circuszelt.svg"
          alt="Circuszelt"
        />

        <div className="z-1 relative">
          <HeroeventAnimated />
          <div className="block-mx-4 flex-wrap items-center justify-around lg:flex lg:items-start lg:pb-16">
            <div className="mx-auto mb-1 flex w-full flex-col items-center justify-center px-4 md:mb-0 md:w-1/2 lg:block">
              <LogoAlt className="lg:h-2/6 lg:w-96"></LogoAlt>
              <h2 className="font-heading mb-8 max-w-sm text-center text-3xl font-bold leading-tight text-yellow-500 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Privater oder Business Event?
              </h2>
              <p className="mb-8 max-w-lg text-center text-base leading-relaxed text-gray-100 lg:text-xl lg:leading-relaxed">
                Wir planen Ihren Event nach Ihren Vorstellungen und Wünschen. Auch Cataring möglich.
                Weitere Info...
              </p>
              <Modale04></Modale04>
            </div>
            <div className="lg:mt- -mt-12 hidden w-3/12 rounded-2xl bg-slate-800 px-0 lg:block">
              <Image
                height="1149"
                width="1089"
                layout="responsive"
                src="/event01.svg"
                alt="Event Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default events
